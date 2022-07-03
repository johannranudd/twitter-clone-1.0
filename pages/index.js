import Head from 'next/head';
import Image from 'next/image';
import { StyledDiv } from './index.styles';
import Sidebar from '../components/layout/Sidebar/Sidebar';
import Feed from '../components/layout/Feed/Feed';
import Widgets from '../components/layout/Widgets/Widgets';
import Modal from '../components/layout/Modal/Modal';

export default function Home() {
  return (
    <StyledDiv>
      <Sidebar />
      <Feed />
      <Widgets />
      <Modal />
    </StyledDiv>
  );
}
