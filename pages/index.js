import Head from 'next/head';
import Image from 'next/image';
import { StyledDiv } from './index.styles';
import Sidebar from '../components/Sidebar/Sidebar';
import Feed from '../components/Feed/Feed';
import Widgets from '../components/Widgets/Widgets';
import Modal from '../components/Modal/Modal';

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
