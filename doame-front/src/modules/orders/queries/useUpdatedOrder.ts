import { useMutation } from 'react-query';
import { postUpdatedOrder, updatedOrderDTO } from '../requests/putUpdatedOrder';

export const useUpdatedOrder = () => {
  return useMutation(
    'updatedOrder',
    async ({
      bagQuantity,
      id,
      bloodType,
      contact,
      description,
      alreadyDonated,
    }: updatedOrderDTO) =>
      await postUpdatedOrder({
        bagQuantity,
        alreadyDonated,
        id,
        bloodType,
        contact,
        description,
      })
  );
};
