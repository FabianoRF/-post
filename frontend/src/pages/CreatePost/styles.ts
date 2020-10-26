import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 100vw;
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

        svg {
          margin-right: 10px;
        }
      }
    }

    @media (max-width: 800px) {
      padding: 0 20px;
    }
  }

  form {
    display: flex;
    align-items: center;
    flex-direction: column;

    margin-top: -25px;
    max-width: 700px;
    width: 100%;

    padding: 20px;

    background: #fff;
    border-radius: 20px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);

    label {
      display: flex;
      flex-direction: column;
      width: 100%;

      textarea {
        margin-top: 15px;
        min-height: 150px;
        border-radius: 20px;
        resize: none;
        padding: 20px;
      }
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px;

      border: 0;
      background: #00b2ff;
      color: #fff;
      font-weight: 600;
      border-radius: 10px;
      transition: background-color 0.3s;
      margin-top: 25px;

      &:hover {
        background: ${shade(0.1, '#fff')};
      }

      svg {
        margin-right: 10px;
      }
    }
  }

  @media (max-width: 800px) {
    margin: 0 20px;
  }
`;
