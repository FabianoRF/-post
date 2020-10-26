import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  color: #000;

  display: flex;
  align-items: center;
  justify-content: center;

  main {
    background-color: #fff;
    padding: 20px;
    width: 700px;
    height: 400px;
    max-height: 400px;
    overflow-y: auto;

    border-radius: 20px;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 600;
      border-bottom: 1px solid #9f9f9f;

      button {
        border: 0;
        background-color: transparent;

        &:hover svg {
          color: #9f9f9f;
        }
      }
    }

    div {
      margin-top: 20px;

      span {
        color: #9f9f9f;
      }
    }
  }
`;
