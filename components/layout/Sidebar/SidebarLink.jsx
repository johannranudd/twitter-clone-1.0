import React from 'react';

const SidebarLink = ({ text, icon }) => {
  const Icon = icon;
  return (
    <div className='hoverAnimation'>
      <Icon />
      {text}
    </div>
  );
};

export default SidebarLink;
