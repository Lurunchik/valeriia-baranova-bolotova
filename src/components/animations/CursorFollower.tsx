import { useEffect, useState } from 'react';

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor follower */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 6,
          top: mousePosition.y - 6,
          transition: 'all 0.1s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="w-3 h-3 rounded-full bg-white opacity-80" />
      </div>

      {/* Rainbow trail effect */}
      <div
        className="fixed pointer-events-none z-40"
        style={{
          left: mousePosition.x - 15,
          top: mousePosition.y - 15,
          transition: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-pink-500/20 blur-sm" />
      </div>

      {/* Outer glow */}
      <div
        className="fixed pointer-events-none z-30"
        style={{
          left: mousePosition.x - 25,
          top: mousePosition.y - 25,
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10 blur-md" />
      </div>
    </>
  );
};

export default CursorFollower;