// import { StyledDiv } from './explore.styles';
import Sidebar from '../../components/Sidebar/Sidebar';
import { StyledDiv } from '../index.styles';
import Feed from '../../components/Feed/Feed';
import Widgets from '../../components/Widgets/Widgets';
import Modal from '../../components/Modal/Modal';

const Explore = () => {
  return (
    <StyledDiv>
      <Sidebar />
      <Feed />
      <Widgets />
      <Modal />
    </StyledDiv>
  );
};

export default Explore;
