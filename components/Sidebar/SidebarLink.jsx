import Link from 'next/link';
import { useRouter } from 'next/router';

const SidebarLink = ({ text, icon }) => {
  const Icon = icon;
  const router = useRouter();
  const trimmedPath = router.pathname.slice(1);

  return (
    <Link href={text === 'Home' ? '/' : `/${text}`}>
      <a
        className={`side-bar-menu-link hoverAnimation ${
          trimmedPath === text || (text === 'Home' && trimmedPath === '')
            ? 'active'
            : ''
        }`}
      >
        <Icon className='link-icon' />
        <span className='link-text'>{text}</span>
      </a>
    </Link>
  );
};

export default SidebarLink;
