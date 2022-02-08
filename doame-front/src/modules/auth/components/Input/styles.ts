import styled from 'styled-components';

export const Input = styled.input`
  width: 25.8rem;
  height: 3.25rem;
  border-radius: 0.62rem;
  outline: none;
  border: 2px solid #aaaaaa;
  padding: 0.9rem;
  font-size: 1.1rem;

  color: ${(props) => props.theme.colors.redPrimary};

  &::placeholder {
    color: #aaaaaa;
  }
`;
