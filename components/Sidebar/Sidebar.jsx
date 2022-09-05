import { StyledDiv } from './sidebar.styles';
import { AiOutlineTwitter, AiOutlineUser } from 'react-icons/ai';
import SidebarLink from './SidebarLink';
import { RiHome7Line } from 'react-icons/ri';
import { BiHash } from 'react-icons/bi';
import { BsBell, BsBookmark, BsMoon, BsSun } from 'react-icons/bs';
import { FiMail, FiMoreHorizontal } from 'react-icons/fi';
import { TbListSearch } from 'react-icons/tb';
import { CgMoreO } from 'react-icons/cg';
import { GiFeather } from 'react-icons/gi';
import { useState, useRef, useEffect } from 'react';
import { useAppContext } from '../../context/context';
import Link from 'next/link';
import { size, device } from '../../styles/app.styles';
import Image from 'next/image';

const Sidebar = () => {
  const { state, dispatch, screenWidth } = useAppContext();
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
      {/* upper */}
      <div className='upper-part'>
        <ul className='list-of-links'>
          <Link href='/'>
            <a>
              <AiOutlineTwitter className='logo hoverAnimation' />
            </a>
          </Link>
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
          <button className='tweet-btn'>
            {screenWidth < size.laptopM ? <GiFeather /> : 'tweet'}
          </button>
        </ul>
      </div>
      {/* lower */}
      <div className='lower-part'>
        <div className='email-widget hoverAnimation'>
          <div className='image-name-email'>
            <Image
              className='user-image'
              src='https://lh3.googleusercontent.com/a/AItbvmnNHabE40v1YxPQH8ytEKuEUiPvqVP_UZA07Pqy=s432-p-rw-no-mo'
              alt='google user image'
              height='50'
              width='50'
            />
            <div className='users-name-and-email'>
              <p>
                <strong>Johann Ranudd</strong>
              </p>
              <p>@jRanudd</p>
            </div>
          </div>
          <FiMoreHorizontal className='more-icon' />
        </div>
      </div>
    </StyledDiv>
  );
};

export default Sidebar;
