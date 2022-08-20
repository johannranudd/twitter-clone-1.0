import { StyledDiv } from './sidebar.styles';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <StyledDiv className='sidebar'>
      <Image src='https://rb.gy/ogau5a' width={50} height={50} />
    </StyledDiv>
  );
};

export default Sidebar;
