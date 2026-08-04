import React from 'react';

interface SoftFolderProps {
  open?: boolean;
  color?: string;
  previews?: string[];
  showPapers?: boolean;
}

const darken = (hex: string, percent: number) => {
  const value = hex.replace('#', '');
  const number = parseInt(value.length === 3 ? value.split('').map((character) => character + character).join('') : value, 16);
  const channel = (shift: number) => Math.max(0, Math.floor(((number >> shift) & 255) * (1 - percent)));
  return `rgb(${channel(16)}, ${channel(8)}, ${channel(0)})`;
};

const SoftFolder: React.FC<SoftFolderProps> = ({ open = false, color = '#8ebad6', previews = [], showPapers = true }) => (
  <div
    className={`soft-folder ${open ? 'is-open' : ''}`}
    style={{
      '--folder-color': color,
      '--folder-back': darken(color, .08),
    } as React.CSSProperties}
    aria-hidden="true"
  >
    <div className="soft-folder-back">
      {showPapers && [0, 1, 2].map((index) => (
        <div key={index} className={`soft-folder-paper soft-folder-paper-${index + 1}`}>
          {previews[index] && <img src={previews[index]} alt="" />}
        </div>
      ))}
      <div className="soft-folder-front" />
      <div className="soft-folder-front soft-folder-front-right" />
    </div>
  </div>
);

export default SoftFolder;
