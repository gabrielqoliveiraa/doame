import { useEffect, useState } from 'react';
import { useCreateOrder } from '../../queries/useCreateOrder';
import { useUpdatedOrder } from '../../queries/useUpdatedOrder';
import {
  Container,
  Content,
  Header,
  Body,
  Footer,
  InputsContainer,
} from './styles';

interface ModalCreateOrderProps {
  onClose: () => void;
}

export function ModalCreateOrder({ onClose }: ModalCreateOrderProps) {
  const [descriptionText, setDescriptionText] = useState('');
  const [bloodTypeInput, setBloodTypeInput] = useState('');
  const [bagQuantityInput, setBagQuantityInput] = useState(0);
  const [contactInput, setcontactInputInput] = useState('');
  const [alreadyDonatedInput, setAlreadyDonatedInput] = useState(0);

  const { mutate: mutateCreateOrder } = useCreateOrder();

  const handleCreateOrder = async () => {
    mutateCreateOrder(
      {
        bagQuantity: bagQuantityInput,
        bloodType: bloodTypeInput,
        contact: contactInput,
        description: descriptionText,
        alreadyDonated: alreadyDonatedInput,
        userId: localStorage.getItem('doame@login'),
      },
      {
        onSuccess: () => {
          window.alert('Ordem Criada!');
          onClose();
        },
        onError: () => {
          window.alert(
            'Error na criação. Entre em contato com o administrador'
          );
        },
      }
    );
  };

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
          <textarea
            value={descriptionText}
            onChange={(event) => setDescriptionText(event.target.value)}
          />

          <InputsContainer>
            <label>
              <span>Qual seu tipo sanguineo ?</span>
              <select
                value={bloodTypeInput}
                onChange={(event) => setBloodTypeInput(event.target.value)}
              >
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </label>

            <label>
              <span>Quantas bolsas você precisa ?</span>
              <input
                value={bagQuantityInput}
                type="number"
                onChange={(event) => setBagQuantityInput(+event.target.value)}
              />
            </label>

            <label>
              <span>Total já arrecadado</span>
              <input
                value={alreadyDonatedInput}
                type="number"
                onChange={(event) =>
                  setAlreadyDonatedInput(+event.target.value)
                }
              />
            </label>

            <label>
              <span>Número do Whatsapp</span>
              <input
                value={contactInput}
                type="text"
                onChange={(event) => setcontactInputInput(event.target.value)}
              />
            </label>
          </InputsContainer>
        </Body>

        <Footer>
          <button type="button" onClick={handleCreateOrder}>
            CRIAR
          </button>
        </Footer>
      </Content>
    </Container>
  );
}
