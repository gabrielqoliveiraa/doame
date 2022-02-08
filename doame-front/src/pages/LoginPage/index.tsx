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

export default function LoginPage() {
  const [createUserModalIsAvailable, setCreateUserModalIsAvailable] =
    useState(false);

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
            <Input type="email" placeholder="Digite seu email" />
            <Input type="password" placeholder="Digite sua senha" />
            <Button typeLayout="login" text="Entrar" />
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
