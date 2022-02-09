import { InputHTMLAttributes } from 'react';
import { Input as InputContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: 'email' | 'password' | 'text';
  placeholder: string;
}

export function Input({ type, placeholder, ...rest }: InputProps) {
  return <InputContainer type={type} placeholder={placeholder} {...rest} />;
}
