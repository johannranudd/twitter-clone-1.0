import { StyledDiv } from './sidebar.styles';
import { AiOutlineTwitter } from 'react-icons/ai';
import SidebarLink from './SidebarLink';
import { RiHome7Line } from 'react-icons/ri';
import { BiHash } from 'react-icons/bi';
import { BsFillBellFill } from 'react-icons/bs';

const Sidebar = () => {
  return (
    <StyledDiv className='sidebar'>
      <AiOutlineTwitter className='logo hoverAnimation' />
      <SidebarLink text='Home' icon={RiHome7Line} />
      <SidebarLink text='Explore' icon={BiHash} />
      <SidebarLink text='Notifications' icon={BsFillBellFill} />
    </StyledDiv>
  );
};

export default Sidebar;
