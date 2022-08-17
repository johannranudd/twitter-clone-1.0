import { StyledDiv } from './sidebar.styles';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <StyledDiv className='sidebar'>
      <Image
        src='https://www.yellow.com.mt/sys/img/1043/12021/metadata/275c8b7b-e0f1-4700-a701-0ee96660ad30.jpg_P.jpg'
        width={50}
        height={50}
      />
    </StyledDiv>
  );
};

export default Sidebar;
