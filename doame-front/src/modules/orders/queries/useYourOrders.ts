import { useQuery } from 'react-query';
import { getYourOrders } from '../requests/getYoursOrders';

export const useYourOrders = (
  userID: string | null,
  isActive: 'home' | 'drop'
) => {
  return useQuery(['yourOrders', isActive], async () => {
    return await getYourOrders(userID);
  });
};
