import { Input as InputContainer } from './styles';

interface InputProps {
  type: 'email' | 'password';
  placeholder: string;
}

export function Input({ type, placeholder }: InputProps) {
  return <InputContainer type={type} placeholder={placeholder} />;
}
