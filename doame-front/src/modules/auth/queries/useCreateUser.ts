import { useMutation } from 'react-query';
import { postCreateUser } from '../requests/postCreateUser';

export const useCreateUser = () => {
  return useMutation(
    'createUser',
    async ({ name, email, password }: UseCreateUserResponse) =>
      await postCreateUser(name, email, password)
  );
};

interface UseCreateUserResponse {
  name: string;
  email: string;
  password: string;
}
