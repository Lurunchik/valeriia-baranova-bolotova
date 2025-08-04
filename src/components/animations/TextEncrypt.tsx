import { useState, useEffect, useRef } from 'react';

interface TextEncryptProps {
  children: string;
  className?: string;
  speed?: number;
}

const TextEncrypt = ({ children, className = '', speed = 50 }: TextEncryptProps) => {
  const [displayText, setDisplayText] = useState(children);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const originalText = children;

  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?`~';

  const scrambleText = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    let iterations = 0;
    const maxIterations = 8;

    const animate = () => {
      setDisplayText(prev => 
        prev.split('').map((char, index) => {
          if (char === ' ') return ' ';
          if (iterations < maxIterations && Math.random() < 0.7) {
            return chars[Math.floor(Math.random() * chars.length)];
          }
          return originalText[index] || char;
        }).join('')
      );

      iterations++;
      
      if (iterations < maxIterations) {
        timeoutRef.current = setTimeout(animate, speed);
      } else {
        setDisplayText(originalText);
        setIsAnimating(false);
      }
    };

    animate();
  };

  const resetText = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsAnimating(false);
    setDisplayText(originalText);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <span
      className={`${className} cursor-pointer transition-colors duration-200 hover:text-primary`}
      onMouseEnter={scrambleText}
      onMouseLeave={resetText}
    >
      {displayText}
    </span>
  );
};

export default TextEncrypt;