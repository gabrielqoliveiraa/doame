import api from '../../../app/config/api';

export const postCreateOrder = async ({
  userId,
  description,
  bloodType,
  bagQuantity,
  contact,
  alreadyDonated,
}: CreateOrderDTO) => {
  const { data } = await api.post(`pedidos`, {
    userId,
    description,
    bloodType,
    bagQuantity,
    contact,
    alreadyDonated,
  });

  return data;
};

export interface CreateOrderDTO {
  description: string;
  bloodType: string;
  bagQuantity: number;
  contact: string;
  alreadyDonated: number;
  userId: string | null;
}
