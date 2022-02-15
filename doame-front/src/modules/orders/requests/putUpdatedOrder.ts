import api from '../../../app/config/api';

export const postUpdatedOrder = async ({
  id,
  description,
  bloodType,
  bagQuantity,
  contact,
  alreadyDonated,
}: updatedOrderDTO) => {
  const { data } = await api.put(`pedidos/${id}`, {
    id,
    description,
    bloodType,
    bagQuantity,
    contact,
    alreadyDonated,
  });

  return data;
};

export interface updatedOrderDTO {
  id: string;
  description: string;
  bloodType: string;
  bagQuantity: number;
  contact: string;
  alreadyDonated: number;
}
