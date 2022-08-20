import { StyledDiv } from './sidebar.styles';
import { AiOutlineTwitter } from 'react-icons/ai';
import SidebarLink from './Sidebar.jsx';

const Sidebar = () => {
  return (
    <StyledDiv className='sidebar'>
      <AiOutlineTwitter className='logo hoverAnimation' />
      <SidebarLink text='home' icon={AiOutlineTwitter} />
    </StyledDiv>
  );
};

export default Sidebar;
