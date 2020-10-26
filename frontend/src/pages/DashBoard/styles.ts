import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 100%;
    height: 35vh;
    display: flex;
    justify-content: center;

    background: #00b2ff;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      max-width: 700px;
      width: 100%;

      h1 {
        color: #fff;
        font-size: 50px;
      }

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;

        text-decoration: none;
        background: #fff;
        color: #00b2ff;
        font-weight: 600;
        border-radius: 10px;
        transition: background-color 0.3s;

        &:hover {
          background: ${shade(0.1, '#fff')};
        }
      }
    }
    @media (max-width: 800px) {
      padding: 0 20px;
    }
  }
`;
