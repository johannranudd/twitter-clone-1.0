import styled from 'styled-components';
import { colors, device } from '../../styles/app.styles';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  .upper-part {
    width: 100%;
    .logo {
      font-size: 3.3rem;
      cursor: pointer;
    }
    /* list of links */
    .list-of-links {
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0.25rem 0;
        @media ${device.laptopM} {
          justify-content: flex-start;
        }
        .link-icon {
          font-size: 2rem;
          @media ${device.laptopM} {
            margin-right: 1rem;
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
        width: 100%;
        overflow: hidden;
        @media ${device.laptopM} {
          padding-left: 5px;
        }
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
            :hover {
              color: lightblue;
            }
          }
        }
      }

      /* tweet btn */
      .tweet-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        margin: 2rem auto;
        border-radius: 50%;
        font-size: 1.2rem;
        border: none;
        background: ${colors.blue};
        color: ${colors.white};
        :hover {
          background: ${colors.blue2};
        }
        @media ${device.laptopM} {
          width: 100%;
          border-radius: 50px;
        }
      }
    } /* end of list */
  }
  /* email widget */
  .lower-part {
    @media ${device.laptopM} {
      width: 100%;
    }
    .email-widget {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 50px;
      cursor: pointer;
      .image-name-email {
        display: flex;
        align-items: center;
        img {
          border-radius: 50%;
        }
        .users-name-and-email {
          display: none;
          @media ${device.laptopM} {
            display: inline;
            margin-left: 0.5rem;
          }
        }
      }
      .more-icon {
        display: none;
        @media ${device.laptopM} {
          display: inline;
        }
      }
    }
  }
`;
