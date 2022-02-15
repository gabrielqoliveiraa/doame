import {
  Container,
  Header,
  Description,
  Footer,
  SectionBlood,
  ProgressBar,
  SectionBarProgress,
  DonateButton,
} from './styles';
import { ReactComponent as QuantityBlood } from '../../../../assets/BloodValue.svg';
import { ReactComponent as DropActive } from '../../../../assets/DropActive.svg';
import { GetAllOrdersApiResponse } from '../../requests/getAllOrders';
import { useState } from 'react';
import { ModalDetails } from '../ModalDetails';
import { ModalDetailsDonate } from '../ModalDetailsDonate';

export function CardOrder({
  order,
  type,
}: {
  order: GetAllOrdersApiResponse;
  type: string;
}) {
  const [isModalDetailVisible, setIsModalDetailVisible] = useState(false);
  const [isModalUpdatedVisible, setIsModalUpdatedVisible] = useState(false);
  const progress = `${
    order.alreadyDonated
      ? ((order.alreadyDonated / order.bagQuantity) * 100).toFixed(2)
      : 0
  }%`;

  const handleOpenModalDetailsOrUpdate = () => {
    if (type === 'all') {
      setIsModalDetailVisible(true);
    } else {
      setIsModalUpdatedVisible(true);
    }
  };

  return (
    <Container>
      {isModalUpdatedVisible && (
        <ModalDetails
          alreadyDonated={order.alreadyDonated}
          id={order.id}
          description={order.description}
          bloodType={order.bloodType}
          bagQuantity={order.bagQuantity}
          contact={order.contact}
          onClose={() => setIsModalUpdatedVisible(false)}
        />
      )}
      {isModalDetailVisible && (
        <ModalDetailsDonate
          alreadyDonated={order.alreadyDonated}
          description={order.description}
          bloodType={order.bloodType}
          bagQuantity={order.bagQuantity}
          contact={order.contact}
          onClose={() => setIsModalDetailVisible(false)}
        />
      )}
      <Header>
        <section>
          <p>{order.user.name}</p>
          <p>{order.user.email}</p>
        </section>
      </Header>
      <Description>{order.description}</Description>
      <Footer>
        <SectionBlood>
          <section>
            <DropActive /> Tipos Compativeis:
            <p>{order.bloodType}</p>
          </section>
          <section>
            <QuantityBlood /> Quantidade: {order.bagQuantity}L
          </section>
        </SectionBlood>

        <SectionBarProgress>
          <p>{progress}</p>
          <ProgressBar progress={progress} />
        </SectionBarProgress>

        <DonateButton onClick={handleOpenModalDetailsOrUpdate}>
          {type === 'all' ? 'Doar' : 'Atualizar'}
        </DonateButton>
      </Footer>
    </Container>
  );
}
