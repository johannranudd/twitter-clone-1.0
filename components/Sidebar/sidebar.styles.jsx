import styled from 'styled-components';
import { colors, device } from '../../styles/app.styles';

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
    cursor: pointer;
  }
  /* list of links */
  .list-of-links {
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0.25rem;
      @media ${device.laptopM} {
        justify-content: flex-start;
      }
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
    .active {
      font-weight: bold;
    }
    /* light switch */
    .light-switch {
      position: relative;
      height: 50px;
      width: 50px;
      overflow: hidden;
      .icon-container {
        position: absolute;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 100px;
        width: 50px;
        transition: 0.4s;
        .link-icon {
          @media ${device.laptopM} {
            margin: 0 0 0 0.4rem;
          }
          :hover {
            color: lightblue;
          }
        }
      }
    }
  }
  /* tweet btn */
  .tweet-btn {
    margin: auto;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 1.2rem;
    border: none;
    background: ${colors.blue};
    color: ${colors.white};
    @media ${device.laptopM} {
      width: 85%;
      border-radius: 50px;
    }
  }
`;
