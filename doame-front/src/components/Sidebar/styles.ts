import styled from 'styled-components';

export const Container = styled.div`
  width: 6.5rem;
  height: 100vh;
  position: fixed;
  background: #fff;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  svg {
    width: 2rem;
    height: 2rem;

    & + svg {
      margin-top: 0.9rem;
    }
  }

  svg {
    cursor: pointer;
  }

  p {
    cursor: pointer;
    position: absolute;
    left: 10;
    bottom: 15px;
  }
`;
