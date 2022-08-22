import { StyledDiv } from './sidebar.styles';
import { AiOutlineTwitter, AiOutlineUser } from 'react-icons/ai';
import SidebarLink from './SidebarLink';
import { RiHome7Line } from 'react-icons/ri';
import { BiHash } from 'react-icons/bi';
import { BsBell, BsBookmark, BsMoon, BsSun } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { TbListSearch } from 'react-icons/tb';
import { CgMoreO } from 'react-icons/cg';
import { useState, useRef } from 'react';
import { useAppContext } from '../../../context/context';

const Sidebar = () => {
  const [sunIsUp, setSunIsUp] = useState(true);
  const { state, dispatch } = useAppContext();
  // console.log('Sidebar:', state);

  const darkmodeRef = useRef();

  function handleLightMode() {
    setSunIsUp(!sunIsUp);
    if (sunIsUp) {
      darkmodeRef.current.style.transform = `translateY(-50px)`;
      dispatch({ type: 'LIGHT' });
    } else {
      darkmodeRef.current.style.transform = `translateY(-0px)`;
      dispatch({ type: 'DARK' });
    }
  }

  return (
    <StyledDiv className='sidebar'>
      <AiOutlineTwitter className='logo hoverAnimation' />
      <ul className='list-of-links'>
        <SidebarLink text='Home' icon={RiHome7Line} />
        <SidebarLink text='Explore' icon={BiHash} />
        <SidebarLink text='Notifications' icon={BsBell} />
        <SidebarLink text='Messages' icon={FiMail} />
        <SidebarLink text='Bookmarks' icon={BsBookmark} />
        <SidebarLink text='Lists' icon={TbListSearch} />
        <SidebarLink text='Profile' icon={AiOutlineUser} />
        <SidebarLink text='More' icon={CgMoreO} />
        <a onClick={handleLightMode} className='light-switch'>
          <div ref={darkmodeRef}>
            <BsSun className='link-icon sun-icon' />
            <BsMoon className='link-icon moon-icon' />
          </div>
        </a>
      </ul>
    </StyledDiv>
  );
};

export default Sidebar;
