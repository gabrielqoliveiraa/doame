import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 65% auto;
`;

export const DoameLogo = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.redPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 800;
  font-size: 72px;
  line-height: 100%;
`;

export const InputsContainer = styled.div`
  padding: 2rem;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  h3 {
    font-weight: bold;
    font-size: 42px;
    line-height: 100%;
    color: ${(props) => props.theme.colors.redPrimary};
  }

  svg {
    width: 6rem;
    height: 6rem;
    margin-bottom: 1.8rem;
  }
`;

export const InputsBox = styled.div`
  width: 100%;
  margin-top: 3.75rem;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  input:nth-child(2) {
    margin-top: 1.5rem;
  }

  button:nth-child(3) {
    margin-top: 1.5rem;
  }
`;

export const Line = styled.div`
  width: 100%;
  margin-top: 1.85rem;
  margin-bottom: 1.85rem;
  height: 1px;
  background: ${(props) => props.theme.colors.redPrimary};
`;
