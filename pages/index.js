import Head from 'next/head';
import Image from 'next/image';
import { StyledDiv } from './index.styles';

export default function Home() {
  return (
    <div>
      <StyledDiv>
        <h1>Test 1</h1>
        <p>some text</p>
        <button>a button</button>
      </StyledDiv>
    </div>
  );
}
