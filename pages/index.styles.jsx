import styled from 'styled-components';
import { device } from '../styles/app.styles';

export const StyledDiv = styled.div`
  display: flex;
  max-width: 700px;
  margin: auto;
  .sidebar {
    max-width: 150px;
    width: 15%;
    min-height: 100vh;
    min-width: 70px;
    border: 1px solid black;
  }
  .feed {
    width: 100%;
    min-height: 100vh;
    border: 1px solid green;
  }
  .widgets {
    display: none;
  }

  .modal {
  }
  @media ${device.laptop} {
    max-width: 1100px;
    .sidebar {
    }
    .feed {
      /* width: 50%; */
    }
    .widgets {
      width: 50%;
      display: block;
      border: 1px solid violet;
    }
  }

  @media ${device.laptopM} {
    max-width: 1280px;
    .sidebar {
      max-width: 100%;
      width: 30%;
    }
    .feed {
    }
    .widgets {
    }
  }
`;
