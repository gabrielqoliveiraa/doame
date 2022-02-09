import api from '../../../app/config/api';

export const postCreateUser = async (
  name: string,
  email: string,
  password: string
) => {
  const { data } = await api.post<CreateUserPostApiResponse>('user', {
    name,
    email,
    password,
  });

  return data;
};

interface CreateUserPostApiResponse {
  id: string;
  name: string;
  email: string;
  password: string;
}
