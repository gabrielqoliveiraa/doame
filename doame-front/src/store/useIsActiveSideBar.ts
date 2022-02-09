import create from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  isActive: 'drop' | 'home';
};

export const useIsActiveSideBar = create<State>(
  persist(
    () =>
      ({
        isActive: 'home',
      } as State),
    {
      name: 'useIsActiveSideBar',
    }
  )
);
