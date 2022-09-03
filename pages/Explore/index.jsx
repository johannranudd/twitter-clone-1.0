// import { StyledDiv } from './explore.styles';
import Sidebar from '../../components/layout/Sidebar/Sidebar';
import { StyledDiv } from '../index.styles';
import Feed from '../../components/layout/Feed/Feed';
import Widgets from '../../components/layout/Widgets/Widgets';
import Modal from '../../components/layout/Modal/Modal';

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
