import styled from 'styled-components';
import { size, device } from '../../../styles/app.styles';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.laptopM} {
    align-items: flex-start;
  }
  .logo {
    margin: 0.25rem;
    font-size: 3.3rem;
    color: white;
    @media ${device.laptopM} {
      color: black;
    }
  }
  .list-of-links {
    a {
      display: flex;
      align-items: center;
      margin: 0.25rem;
      .link-icon {
        font-size: 2rem;
        @media ${device.laptopM} {
          margin: 0 1rem 0 0.4rem;
        }
      }
      .link-text {
        display: none;
        @media ${device.laptopM} {
          display: inline;
          font-size: 1.2rem;
        }
      }
    }
    .light-switch {
      position: relative;
      height: 50px;
      width: 50px;
      /* overflow: hidden; */
      border: 1px solid red;
      div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: 0.4s;
        height: 100px;
        width: 50px;
        border: 1px solid green;
        .link-icon {
          margin: 0;
        }
      }
    }
  }
`;
