import { useEffect, useState } from 'react';
import { useCreateUser } from '../../queries/useCreateUser';
import { Input } from '../Input';
import { Container, Content, Header, Body, Footer } from './styles';

interface CreateUserModalProps {
  onClose: () => void;
}

export function CreateUserModal({ onClose }: CreateUserModalProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const { mutate: mutateUseCreateUser } = useCreateUser();

  const handleCreateUserApi = async () => {
    mutateUseCreateUser(
      { name, email, password },
      {
        onSuccess: () => {
          window.alert('Usuário Criado com sucesso');
          onClose();
        },
        onError: () => {
          window.alert('Falha ao criar o usuario ou já existente!');
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
          <h4>Adicionar Usuário</h4>
        </Header>

        <Body>
          <Input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Digite seu nome"
          />
          <Input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Digite seu email"
          />
          <Input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Digite sua senha"
          />
        </Body>

        <Footer>
          <button type="button" onClick={onClose}>
            CANCELAR
          </button>
          <button onClick={handleCreateUserApi} type="submit">
            CONFIRMAR
          </button>
        </Footer>
      </Content>
    </Container>
  );
}
