import { KeyboardEvent, useEffect } from 'react';
import { Container, Content, Header, Body, Footer } from './styles';

interface CreateUserModalProps {
  onClose: () => void;
}

export function CreateUserModal({ onClose }: CreateUserModalProps) {
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
          <h4>Adicionar Usuário</h4>
        </Header>

        <Body></Body>

        <Footer>
          <button type="button" onClick={onClose}>
            CANCELAR
          </button>
          <button type="submit">CONFIRMAR</button>
        </Footer>
      </Content>
    </Container>
  );
}
