import styled from 'styled-components';
import { device } from '../styles/app.styles';

export const StyledDiv = styled.div`
  /* This stylesheet is only for the display of  */
  display: flex;
  max-width: 700px;
  margin: auto;
  padding: 0 2rem;
  @media ${device.laptop} {
    max-width: 1200px;
  }
  .sidebar {
    position: fixed;
    min-height: 100vh;
    width: 100px;
    border: 1px solid black;
    @media ${device.laptopM} {
      width: 250px;
    }
  }
  .feed {
    flex-grow: 1;
    width: 100%;
    min-height: 100vh;
    border: 1px solid green;
    background: #def;
    margin-left: 100px;
    @media ${device.laptopM} {
      margin-left: 250px;
    }
  }
  .widgets {
    display: none;
    @media ${device.laptop} {
      display: block;
      width: 600px;
      background: #fed;
    }
  }

  .modal {
  }
`;
