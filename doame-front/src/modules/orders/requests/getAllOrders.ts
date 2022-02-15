import api from '../../../app/config/api';

export const getAllOrders = async () => {
  const { data } = await api.get<GetAllOrdersApiResponse[]>('pedidos');

  return data;
};

export interface GetAllOrdersApiResponse {
  id: string;
  description: string;
  bloodType: string;
  bagQuantity: number;
  contact: string;
  userId: string;
  alreadyDonated: number;
  user: {
    id: string;
    name: string;
    email: string;
    password: string;
  };
}
