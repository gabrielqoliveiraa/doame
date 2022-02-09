import {
  Container,
  DoameLogo,
  InputsContainer,
  InputsBox,
  Line,
} from './styles';
import { Button, Input, CreateUserModal } from '../../modules/auth/index';
import { ReactComponent as PadLock } from '../../assets/padlock.svg';
import { useState } from 'react';
import { useLogin } from '../../modules/auth/queries/useLogin';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createUserModalIsAvailable, setCreateUserModalIsAvailable] =
    useState(false);

  const { mutate: mutateUseLogin } = useLogin();

  const handleLoginApi = async () => {
    mutateUseLogin(
      { email, password },
      {
        onSuccess: () => {
          navigate('/home');
        },
        onError: () => {
          window.alert('Senha Inválida');
        },
      }
    );
  };

  function openCreateUserModal() {
    setCreateUserModalIsAvailable(true);
  }

  return (
    <>
      {createUserModalIsAvailable && (
        <CreateUserModal onClose={() => setCreateUserModalIsAvailable(false)} />
      )}
      <Container>
        <DoameLogo>DOA.ME</DoameLogo>
        <InputsContainer>
          <PadLock />
          <h3>ENTRAR</h3>

          <InputsBox>
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
            <Button onClick={handleLoginApi} typeLayout="login" text="Entrar" />
          </InputsBox>
          <Line />
          <Button
            typeLayout="register"
            onClick={openCreateUserModal}
            text="Cadastre-se"
          />
        </InputsContainer>
      </Container>
    </>
  );
}
