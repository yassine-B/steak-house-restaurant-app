import React from 'react';

export const Styles = {
  overlay: 'absolute bg-gray-800 z-10 h-full w-full',
  0: 'opacity-0',
  10: 'opacity-10',
  20: 'opacity-20',
  25: 'opacity-25',
  30: 'opacity-30',
  40: 'opacity-40',
  50: 'opacity-50',
  60: 'opacity-60',
  65: 'opacity-65',
  70: 'opacity-70',
  75: 'opacity-75',
  80: 'opacity-80',
  100: 'opacity-100'
};

interface overlayProps {
  opacity?: 0 | 10 | 20 | 25 | 30 | 40 | 50 | 60 | 65 | 70 | 75 | 80 | 100;
  styles?: string;
  onClose?: () => void;
}
export function Overlay({ opacity = 80, styles = '', onClose }: overlayProps) {
  return (
    <div
      onClick={() => {
        onClose && onClose();
      }}
      className={`${Styles.overlay}
  ${Styles[opacity]}  ${styles}`}></div>
  );
}

export default Overlay;
