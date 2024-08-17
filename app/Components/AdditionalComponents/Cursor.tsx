import { useEffect, useState } from 'react';
import styles from './Cursor.module.css';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTargetPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener('mousemove', handleMouseMove);
    const updateCursorPosition = () => {
      setPosition(prevPosition => {
        const easing = 0.5; // Adjust this value to control the speed of the ball
        const newX = prevPosition.x + (targetPosition.x - prevPosition.x) * easing;
        const newY = prevPosition.y + (targetPosition.y - prevPosition.y) * easing;
        return { x: newX, y: newY };
      });

      requestAnimationFrame(updateCursorPosition);
    };

    requestAnimationFrame(updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [targetPosition]);

  return (
    <div
      className={styles.cursor}
      style={{ left: position.x, top: position.y }}
    />
  );
};

export default Cursor;
