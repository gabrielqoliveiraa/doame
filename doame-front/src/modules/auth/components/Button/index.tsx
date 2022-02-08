import { ButtonContainer } from './styles';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeLayout: 'register' | 'login';
  text: string;
}

export function Button({ text, typeLayout, ...rest }: ButtonProps) {
  return (
    <ButtonContainer typeLayout={typeLayout} type="button" {...rest}>
      {text}
    </ButtonContainer>
  );
}
