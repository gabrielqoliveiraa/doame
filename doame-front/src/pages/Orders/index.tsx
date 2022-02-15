import { useState } from 'react';
import { ModalCreateOrder } from '../../modules/orders/components/ModalCreateOrder';
import { CardOrder } from '../../modules/orders/index';
import { Container, Header } from './styles';

interface IOrders {
  type: 'all' | 'your';
  orders: any;
}

export default function Orders({ type, orders }: IOrders) {
  const [openModalCreateOrder, setOpenModalCreateOrder] = useState(false);

  return (
    <Container>
      {openModalCreateOrder && (
        <ModalCreateOrder onClose={() => setOpenModalCreateOrder(false)} />
      )}
      <Header>
        <h1>{type === 'all' ? 'Todos os Pedidos' : 'Seus Pedidos'} </h1>
        <button onClick={() => setOpenModalCreateOrder(true)}>
          Abrir um pedido
        </button>
      </Header>
      {orders?.map((order: any) => (
        <CardOrder order={order} key={order.id} type={type} />
      ))}
    </Container>
  );
}
