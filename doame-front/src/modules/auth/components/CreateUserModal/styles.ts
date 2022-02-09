import styled from 'styled-components';

export const Container = styled.div`
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;

  overflow-y: scroll;

  animation: opac 0.4s;

  @keyframes opac {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  width: 550px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 24px;
  border-radius: 8px;
  padding: 24px;
`;

export const Header = styled.header`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  h4 {
    font-size: 16px;
    line-height: 19.2px;
    font-weight: bold;
    margin: 0;
    color: ${(props) => props.theme.colors.darkBlue300};
  }

  svg {
    cursor: pointer;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;

  button:nth-child(1) {
    border: none;
    background: transparent;
    color: ${(props) => props.theme.colors.gray300};
    font-size: 16px;
    line-height: 19px;
    font-weight: bold;
    letter-spacing: 1.25px;
  }
  button:nth-child(2) {
    width: 140px;
    height: 36px;
    background: ${(props) => props.theme.colors.redPrimary};
    font-size: 16px;
    line-height: 19px;
    font-weight: bold;
    letter-spacing: 1.25px;
    border: none;
    border-radius: 8px;
    color: #ffffff;
  }
`;

export const Body = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    & + input {
      margin-top: 15px;
    }
  }
`;
