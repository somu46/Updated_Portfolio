import { useEffect, useRef, useContext } from 'react';
import { ThemeContext } from '../../App';

const STAR_COUNT = 280;

/* Generate stars once — random position, size, color, twinkle phase */
function buildStars() {
  return Array.from({ length: STAR_COUNT }, () => {
    const tier = Math.random();
    // 80% tiny · 15% medium · 5% bright
    const r =
      tier < 0.80 ? Math.random() * 0.55 + 0.15 :
      tier < 0.95 ? Math.random() * 0.55 + 0.75 :
                    Math.random() * 0.70 + 1.35;

    // Mostly blue-white, some warm amber, some cool blue
    const hue = Math.random();
    const color =
      hue < 0.12 ? [255, 215, 140] :  // warm amber (for the golden-hour soul)
      hue < 0.24 ? [140, 190, 255] :  // cool blue
                   [215, 228, 255];   // blue-white (majority)

    return {
      x: Math.random(),          // 0–1 of viewport width
      y: Math.random(),          // 0–1 of viewport height
      r,
      baseAlpha: 0.35 + Math.random() * 0.65,
      phase: Math.random() * Math.PI * 2,
      speed: 0.25 + Math.random() * 1.1, // twinkle speed
      color,
    };
  });
}

const StarField = () => {
  const canvasRef = useRef(null);
  const { theme } = useContext(ThemeContext);
  const rafRef = useRef(null);
  const starsRef = useRef(buildStars());

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((s) => {
        const twinkle = 0.45 + 0.55 * Math.abs(Math.sin(t * 0.0008 * s.speed + s.phase));
        const alpha = s.baseAlpha * twinkle;
        const [r, g, b] = s.color;

        ctx.beginPath();
        ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha.toFixed(3)})`;
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        opacity: theme === 'dark' ? 1 : 0,
        transition: 'opacity 0.7s ease',
      }}
    />
  );
};

export default StarField;
