import { useQuery } from 'react-query';
import { getAllOrders } from '../requests/getAllOrders';

export const useAllOrders = () => {
  return useQuery('allOrders', async () => await getAllOrders());
};
