import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const TEX = 'https://threejs.org/examples/textures/planets/';

const MARKERS = [
  {
    lat: 22.5726, lon: 88.3639,
    color: 0x818cf8,
    name: 'Kolkata, India',
    role: 'Home Base',
    
  },
  {
    lat: 8.6698, lon: 7.0360,
    color: 0xfbbf24,
    name: 'Abuja, Nigeria',
    role: 'Client',
    
  },
];

const Globe = () => {
  const canvasRef  = useRef(null);   // Three.js mounts here
  const meshesRef  = useRef([]);     // { mesh, marker } for raycasting
  const cameraRef  = useRef(null);
  const [popup, setPopup] = useState(null); // { x, y, marker }

  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    const w = container.clientWidth;
    const h = container.clientHeight;

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
    camera.position.set(0, 0, 15);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping    = true;
    controls.dampingFactor    = 0.05;
    controls.autoRotate       = true;
    controls.autoRotateSpeed  = 0.5;
    controls.enableZoom       = false;
    controls.enablePan        = false;

    const loader = new THREE.TextureLoader();

    /* Earth */
    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(5, 64, 64),
      new THREE.MeshPhongMaterial({
        map:         loader.load(TEX + 'earth_atmos_2048.jpg'),
        specularMap: loader.load(TEX + 'earth_specular_2048.jpg'),
        normalMap:   loader.load(TEX + 'earth_normal_2048.jpg'),
        normalScale: new THREE.Vector2(0.85, 0.85),
        specular:    new THREE.Color(0x333333),
        shininess:   18,
      })
    );
    scene.add(earth);

    /* Clouds */
    const clouds = new THREE.Mesh(
      new THREE.SphereGeometry(5.08, 64, 64),
      new THREE.MeshPhongMaterial({
        map: loader.load(TEX + 'earth_clouds_1024.png'),
        transparent: true, opacity: 0.38, depthWrite: false,
      })
    );
    scene.add(clouds);

    /* Atmosphere */
    scene.add(new THREE.Mesh(
      new THREE.SphereGeometry(5.22, 64, 64),
      new THREE.MeshPhongMaterial({ color: 0x4499ff, transparent: true, opacity: 0.055, side: THREE.FrontSide })
    ));
    scene.add(new THREE.Mesh(
      new THREE.SphereGeometry(5.5, 64, 64),
      new THREE.MeshPhongMaterial({ color: 0x1144cc, transparent: true, opacity: 0.018, side: THREE.BackSide })
    ));

    /* Lighting */
    scene.add(new THREE.AmbientLight(0x112244, 3.8));
    const sun = new THREE.DirectionalLight(0xfff0e0, 2.6);
    sun.position.set(12, 5, 8);
    scene.add(sun);

    /* Markers */
    const ringMats = [];

    MARKERS.forEach((m) => {
      const phi   = (90 - m.lat) * (Math.PI / 180);
      const theta = (m.lon + 180) * (Math.PI / 180);
      const R = 5.14;
      const pos = new THREE.Vector3(
        -R * Math.sin(phi) * Math.cos(theta),
         R * Math.cos(phi),
         R * Math.sin(phi) * Math.sin(theta)
      );

      /* Visible dot */
      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(0.07, 16, 16),
        new THREE.MeshBasicMaterial({ color: m.color })
      );
      dot.position.copy(pos);
      scene.add(dot);

      /* Invisible larger hit target */
      const hitMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.28, 8, 8),
        new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false })
      );
      hitMesh.position.copy(pos);
      scene.add(hitMesh);
      meshesRef.current.push({ mesh: hitMesh, marker: m });

      /* Pulse ring */
      const ringMat = new THREE.MeshBasicMaterial({
        color: m.color, transparent: true, opacity: 0.7, side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(new THREE.RingGeometry(0.11, 0.17, 32), ringMat);
      ring.position.copy(pos);
      ring.lookAt(new THREE.Vector3(0, 0, 0));
      scene.add(ring);
      ringMats.push(ringMat);
    });

    /* Render loop */
    const clock = new THREE.Clock();
    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      ringMats.forEach((mat, i) => {
        const offset = i * Math.PI;
        const pulse = 1 + 0.35 * Math.abs(Math.sin(t * 1.8 + offset));
        mat.opacity = 0.7 * (1 - (pulse - 1) / 0.35);
      });
      clouds.rotation.y += 0.00008;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    /* Raycasting — click on a dot to show popup */
    const raycaster = new THREE.Raycaster();
    const mouse     = new THREE.Vector2();

    const onClick = (e) => {
      const rect = container.getBoundingClientRect();
      mouse.x =  ((e.clientX - rect.left)  / rect.width)  * 2 - 1;
      mouse.y = -((e.clientY - rect.top)   / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObjects(meshesRef.current.map(d => d.mesh));

      if (hits.length > 0) {
        const hit    = hits[0].object;
        const entry  = meshesRef.current.find(d => d.mesh === hit);
        if (entry) {
          setPopup({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            marker: entry.marker,
          });
          controls.autoRotate = false; // pause while popup is open
        }
      } else {
        setPopup(null);
        controls.autoRotate = true;
      }
    };

    /* Cursor changes on hover */
    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouse.x =  ((e.clientX - rect.left)  / rect.width)  * 2 - 1;
      mouse.y = -((e.clientY - rect.top)   / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObjects(meshesRef.current.map(d => d.mesh));
      container.style.cursor = hits.length > 0 ? 'pointer' : 'grab';
    };

    container.addEventListener('click', onClick);
    container.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      renderer.setSize(nw, nh);
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('click', onClick);
      container.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      controls.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, []);

  /* Clamp popup so it never overflows the container */
  const popupStyle = popup ? {
    left: Math.min(popup.x + 14, (canvasRef.current?.clientWidth ?? 400) - 200),
    top:  Math.max(popup.y - 80, 8),
  } : {};

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      <div ref={canvasRef} className="w-full h-full" />

      {popup && (
        <div
          className="absolute z-10 w-48 rounded-xl bg-black/75 backdrop-blur-md
            border border-white/10 p-3 pointer-events-none
            animate-fade-in"
          style={popupStyle}
        >
          <p className="text-[10px] uppercase tracking-widest font-semibold mb-1"
            style={{ color: popup.marker.color === 0x818cf8 ? '#818cf8' : '#fbbf24' }}>
            {popup.marker.role}
          </p>
          <p className="text-white text-sm font-semibold leading-tight mb-1.5">
            {popup.marker.name}
          </p>
          {/* <p className="text-gray-400 text-[11px] leading-relaxed">
            {popup.marker.connection}
          </p> */}
        </div>
      )}
    </div>
  );
};

export default Globe;
