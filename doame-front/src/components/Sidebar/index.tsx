import { Container } from './styles';
import { ReactComponent as HomeActive } from '../../assets/HomeActive.svg';
import { ReactComponent as Home } from '../../assets/Home.svg';
import { ReactComponent as Drop } from '../../assets/drop.svg';
import { ReactComponent as DropActive } from '../../assets/DropActive.svg';
import { useState } from 'react';
import { useIsActiveSideBar } from '../../store/useIsActiveSideBar';

export const Sidebar = () => {
  const { isActive } = useIsActiveSideBar();

  const handleChangeActiveIcon = () => {
    if (isActive === 'home') {
      useIsActiveSideBar.setState({ isActive: 'drop' });
    } else {
      useIsActiveSideBar.setState({ isActive: 'home' });
    }
  };

  return (
    <Container>
      {isActive === 'home' ? (
        <HomeActive />
      ) : (
        <Home onClick={handleChangeActiveIcon} />
      )}
      {isActive === 'drop' ? (
        <DropActive />
      ) : (
        <Drop onClick={handleChangeActiveIcon} />
      )}
    </Container>
  );
};
