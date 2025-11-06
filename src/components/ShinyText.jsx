import { useEffect, useRef } from 'react';
import '../assets/ShinyText.css';

const ShinyText = ({ text, className = '', disabled = false, speed = 5 }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (disabled || !textRef.current) return;

    const element = textRef.current;
    const duration = speed;

    element.style.setProperty('--animation-duration', `${duration}s`);

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      element.style.setProperty('--x', `${x}px`);
      element.style.setProperty('--y', `${y}px`);
    };

    element.addEventListener('mousemove', handleMouseMove);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
    };
  }, [disabled, speed]);

  return (
    <span
      ref={textRef}
      className={`shiny-text ${disabled ? 'shiny-text-disabled' : ''} ${className}`}
      data-text={text}
    >
      {text}
    </span>
  );
};

export default ShinyText;
