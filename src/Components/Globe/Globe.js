import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const markers = [
  { lat: 22.629184,  lon: 88.452165,  color: 0x6366f1, label: 'Kolkata (Home)' },
  { lat: 9.08,   lon: 8.68,   color: 0xf59e0b, label: 'Nigeria' },
  { lat: -30.55, lon: 22.94,  color: 0xf59e0b, label: 'South Africa' },
  { lat: 23.89,  lon: 45.08,  color: 0xf59e0b, label: 'Saudi Arabia' },
  { lat: 49.82,  lon: 15.47,  color: 0xf59e0b, label: 'Czech Republic' },
  { lat: 39.83,  lon: -98.58, color: 0xf59e0b, label: 'USA' },
];

const Globe = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x060614);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 15);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.8;
    controls.enableZoom = false;
    controls.enablePan = false;

    // Earth
    const textureLoader = new THREE.TextureLoader();
    const earthTex = textureLoader.load(
      'https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg'
    );
    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(5, 64, 64),
      new THREE.MeshPhongMaterial({ map: earthTex, shininess: 8 })
    );
    scene.add(earth);

    // Atmosphere glow
    const atmosphereGeo = new THREE.SphereGeometry(5.15, 64, 64);
    const atmosphereMat = new THREE.MeshPhongMaterial({
      color: 0x4466ff,
      transparent: true,
      opacity: 0.08,
      side: THREE.FrontSide,
    });
    scene.add(new THREE.Mesh(atmosphereGeo, atmosphereMat));

    // Stars
    const starPositions = new Float32Array(3000 * 3);
    for (let i = 0; i < starPositions.length; i++) {
      starPositions[i] = (Math.random() - 0.5) * 300;
    }
    const starsGeo = new THREE.BufferGeometry();
    starsGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    scene.add(new THREE.Points(starsGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.18 })));

    // Lights
    scene.add(new THREE.AmbientLight(0x334466, 1.2));
    const sun = new THREE.DirectionalLight(0xffeedd, 1.5);
    sun.position.set(8, 5, 10);
    scene.add(sun);

    // Add location markers
    const addMarker = (lat, lon, color) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = lon * (Math.PI / 180);
      const r = 5.12;
      const position = new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      );

      // Marker sphere
      const marker = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 10, 10),
        new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.8 })
      );
      marker.position.copy(position);
      scene.add(marker);

      // Halo ring
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(0.14, 0.22, 24),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.5, side: THREE.DoubleSide })
      );
      ring.position.copy(position);
      ring.lookAt(new THREE.Vector3(0, 0, 0));
      scene.add(ring);
    };

    markers.forEach(({ lat, lon, color }) => addMarker(lat, lon, color));

    // Animate
    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      controls.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <div ref={containerRef} className="w-full h-full rounded-2xl overflow-hidden" />
      {/* Legend */}
      <div className="absolute bottom-3 left-3 flex flex-col gap-1.5 pointer-events-none">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 flex-shrink-0" />
          <span className="text-xs text-white/70">Kolkata, India (Home)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 flex-shrink-0" />
          <span className="text-xs text-white/70">Client regions</span>
        </div>
      </div>
      
    </div>
  );
};

export default Globe;
