import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 6.5rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  padding: 2rem;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    width: 15.125rem;
    height: 2.688rem;
    border: none;
    border-radius: 10px;
    outline: none;
    color: white;
    background-color: #00df6d;

    font-weight: bold;
    font-size: 24px;
    line-height: 29px;

    color: #ffffff;
  }
`;
