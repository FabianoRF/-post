import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: -25px;
  max-width: 700px;
  width: 100%;

  background: #fff;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);

  & + section {
    margin-top: 25px;
  }

  div {
    flex: 1;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.28);

    span {
      color: #9f9f9f;
    }
  }

  main {
    margin-top: 20px;
    width: 100%;

    p {
      font-size: 20px;
    }

    footer {
      margin-top: 40px;
      display: flex;
      justify-content: center;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        border: 0;
        border-radius: 10px;

        color: #00b2ff;
        transition: color 0.2s;

        svg {
          margin-right: 5px;
        }

        &:hover {
          color: rgba(0, 178, 255, 0.22);
        }
      }

      button + button {
        border-left: 3px solid #fff;
      }
    }
  }

  form {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    background: rgba(0, 178, 255, 0.22);
    border-radius: 10px;

    input {
      width: 100%;
      border: 0;
      padding: 10px;
      background: transparent;

      font-size: 14px;
      font-weight: 400;

      &::placeholder {
        color: #00b2ff;
      }
    }

    button {
      display: flex;
      align-items: center;

      padding: 10px;
      border: 0;
      border-radius: 10px;

      background: #00b2ff;
      color: #fff;
      transition: background-color 0.2s;

      svg {
        margin-right: 5px;
      }

      &:hover {
        background: ${shade(0.2, '#00b2ff')};
      }
    }
  }

  @media (max-width: 800px) {
    margin: -25px 20px 0px 20px;
  }
`;
