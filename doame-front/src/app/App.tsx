import { ThemeProviderContainer } from './components/Providers/Theme';
import { AppRoutes } from './routes';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <ThemeProviderContainer>
      <AppRoutes />
      <GlobalStyle />
    </ThemeProviderContainer>
  );
}
