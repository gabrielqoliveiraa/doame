import { useEffect, useState } from 'react';
import { useUpdatedOrder } from '../../queries/useUpdatedOrder';
import {
  Container,
  Content,
  Header,
  Body,
  Footer,
  InputsContainer,
} from './styles';

interface ModalDetailsDonateProps {
  onClose: () => void;
  description: string;
  bloodType: string;
  bagQuantity: number;
  contact: string;
  alreadyDonated: number;
}

export function ModalDetailsDonate({
  onClose,
  description,
  bloodType,
  bagQuantity,
  contact,
  alreadyDonated,
}: ModalDetailsDonateProps) {
  useEffect(() => {
    const closeOnEscapeKeyDown = (e: any) => {
      if ((e.charCode || e.keyCode) === 27) {
        onClose();
      }
    };

    document.body.addEventListener('keydown', closeOnEscapeKeyDown);

    return () =>
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
  }, [onClose]);

  const sendToWpp = () => {
    window.open(
      `  https://api.whatsapp.com/send?phone=55${contact}&text=Ol%C3%A1%2C%20%20vi%20seu%20pedido%20no%20Doa.me%20e%20gostaria%20de%20ajudar%2C%20pode%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20%3F`
    );
  };

  return (
    <Container
      onMouseDown={() => {
        onClose();
      }}
    >
      <Content onMouseDown={(e) => e.stopPropagation()}>
        <Header>
          <h4>Detalhes da Requisição</h4>
        </Header>

        <Body>
          <textarea value={description} />

          <InputsContainer>
            <label>
              <span>Qual seu tipo sanguineo ?</span>
              <select>
                <option>{bloodType}</option>
              </select>
            </label>

            <label>
              <span>Quantas bolsas você precisa ?</span>
              <input value={bagQuantity} type="number" />
            </label>

            <label>
              <span>Total já arrecadado</span>
              <input value={alreadyDonated} type="number" />
            </label>

            <label>
              <span>Número do Whatsapp</span>
              <input value={contact} type="text" />
            </label>
          </InputsContainer>
        </Body>

        <Footer>
          <button type="button" onClick={sendToWpp}>
            Entrar em contato
          </button>
        </Footer>
      </Content>
    </Container>
  );
}
