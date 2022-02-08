import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';

interface Props {
  children: React.ReactNode;
}

export function ThemeProviderContainer({ children }: Props) {
  return <ThemeProvider theme={theme.default}>{children}</ThemeProvider>;
}
