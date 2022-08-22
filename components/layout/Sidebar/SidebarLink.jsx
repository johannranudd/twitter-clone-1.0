import Link from 'next/link';

const SidebarLink = ({ text, icon }) => {
  const Icon = icon;
  return (
    <Link href='https://www.youtube.com/'>
      <a className='side-bar-menu-link hoverAnimation'>
        <Icon className='link-icon' />
        <span className='link-text'>{text}</span>
      </a>
    </Link>
  );
};

export default SidebarLink;
