import { useMutation } from 'react-query';
import { postLogin } from '../requests/postLogin';

export const useLogin = () => {
  return useMutation(
    'loginUser',
    async ({ email, password }: UseLoginProps) =>
      await postLogin(email, password)
  );
};

interface UseLoginProps {
  email: string;
  password: string;
}
