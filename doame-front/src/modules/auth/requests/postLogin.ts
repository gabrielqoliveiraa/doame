import api from '../../../app/config/api';

export const postLogin = async (email: string, password: string) => {
  const { data } = await api.post<boolean>('user/login', {
    email,
    password,
  });

  return data;
};
