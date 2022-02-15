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
  width: 70%;
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
  justify-content: center;
  margin-top: 24px;

  button {
    width: 550px;
    height: 64px;
    border: none;
    background: #00df6d;
    color: white;
    border-radius: 20px;

    font-weight: 800;
    font-size: 18px;
    line-height: 26px;
    color: #ffffff;
  }
`;

export const Body = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  select {
    width: 161px;
    height: 56px;
    background: #f5f8fa;
    border: 1px solid #dce2e6;
    box-sizing: border-box;
    border-radius: 10px;

    font-weight: 800;
    font-size: 26px;
    line-height: 22px;
    color: #617480;
  }

  textarea {
    margin-bottom: 16px;
    border-radius: 10px;
    width: 500px;
    height: 250px;
    border: none;
    outline: none;
    background: #c4c4c4;
    color: #242424;

    font-size: 16px;
    resize: none;

    padding: 12px 20px;
    box-sizing: border-box;
  }
`;

export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  input {
    width: 161px;
    height: 56px;
    background: #f5f8fa;
    border: 1px solid #dce2e6;
    box-sizing: border-box;
    border-radius: 10px;

    font-weight: 800;
    font-size: 26px;
    line-height: 22px;
    color: #617480;
  }
`;
