import { StyledDiv } from './sidebar.styles';
import { AiOutlineTwitter, AiOutlineUser } from 'react-icons/ai';
import SidebarLink from './SidebarLink';
import { RiHome7Line } from 'react-icons/ri';
import { BiHash } from 'react-icons/bi';
import { BsBell, BsBookmark, BsMoon, BsSun } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { TbListSearch } from 'react-icons/tb';
import { CgMoreO } from 'react-icons/cg';
import { useState, useRef, useEffect } from 'react';
import { useAppContext } from '../../../context/context';
import Link from 'next/link';

const Sidebar = () => {
  const [sunIsUp, setSunIsUp] = useState(true);
  const { state, dispatch } = useAppContext();

  const darkmodeRef = useRef();

  function handleColorMode() {
    const localData = localStorage.getItem('mode')
      ? JSON.parse(localStorage.getItem('mode'))
      : null;
    if (localData.background === '#000') {
      dispatch({ type: 'LIGHT', payload: darkmodeRef });
    } else {
      dispatch({ type: 'DARK', payload: darkmodeRef });
    }
  }

  useEffect(() => {
    dispatch({ type: 'INITIAL', payload: darkmodeRef });
  }, []);

  return (
    <StyledDiv className='sidebar'>
      <Link href='/'>
        <a>
          <AiOutlineTwitter className='logo hoverAnimation' />
        </a>
      </Link>
      <ul className='list-of-links'>
        <SidebarLink text='Home' icon={RiHome7Line} />
        <SidebarLink text='Explore' icon={BiHash} />
        <SidebarLink text='Notifications' icon={BsBell} />
        <SidebarLink text='Messages' icon={FiMail} />
        <SidebarLink text='Bookmarks' icon={BsBookmark} />
        <SidebarLink text='Lists' icon={TbListSearch} />
        <SidebarLink text='Profile' icon={AiOutlineUser} />
        <SidebarLink text='More' icon={CgMoreO} />
        <a onClick={handleColorMode} className='light-switch'>
          <div className='icon-container' ref={darkmodeRef}>
            <BsSun className='link-icon sun-icon' />
            <BsMoon className='link-icon moon-icon' />
          </div>
        </a>
      </ul>
    </StyledDiv>
  );
};

export default Sidebar;
