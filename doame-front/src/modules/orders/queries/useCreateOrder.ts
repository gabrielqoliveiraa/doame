import { useMutation } from 'react-query';
import { CreateOrderDTO, postCreateOrder } from '../requests/postCreateOrder';

export const useCreateOrder = () => {
  return useMutation(
    'createOrder',
    async ({
      bagQuantity,
      userId,
      bloodType,
      contact,
      description,
      alreadyDonated,
    }: CreateOrderDTO) =>
      await postCreateOrder({
        bagQuantity,
        alreadyDonated,
        userId,
        bloodType,
        contact,
        description,
      })
  );
};
