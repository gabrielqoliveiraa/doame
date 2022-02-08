import styled from 'styled-components';

export const ButtonContainer = styled.button<{ typeLayout: string }>`
  width: 25.8rem;
  height: 3.25rem;

  background: ${(props) =>
    props.typeLayout === 'register'
      ? props.theme.colors.white
      : props.theme.colors.redPrimary};

  color: ${(props) =>
    props.typeLayout === 'register'
      ? props.theme.colors.redPrimary
      : props.theme.colors.white};

  font-size: 1.5rem;
  line-height: 100%;

  outline: none;
  border-radius: 0.62rem;
  border: ${(props) =>
    props.typeLayout === 'register'
      ? `1px solid ${props.theme.colors.redPrimary}`
      : 'none'};
  transition: ${(props) => props.typeLayout === 'login' && 'filter: 0.2s'};

  &:hover {
    filter: ${(props) =>
      props.typeLayout === 'register' ? `grayscale(80%)` : 'brightness(0.8)'};
  }
`;
