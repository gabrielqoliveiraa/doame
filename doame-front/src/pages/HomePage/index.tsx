import { Sidebar } from '../../components/Sidebar';
import { useIsActiveSideBar } from '../../store/useIsActiveSideBar';
import Orders from '../Orders';
import { useAllOrders, useYourOrders } from '../../modules/orders/index';
import { Container } from './styles';

export default function HomePage() {
  const userID = localStorage.getItem('doame@login');
  const { isActive } = useIsActiveSideBar();
  const { data } = useAllOrders();
  const { data: yourOrders } = useYourOrders(userID, isActive);

  return (
    <Container>
      <Sidebar />
      <Orders
        orders={isActive === 'home' ? data : yourOrders}
        type={isActive === 'home' ? 'all' : 'your'}
      />
    </Container>
  );
}
