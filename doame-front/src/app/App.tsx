import { ThemeProviderContainer } from './components/Providers/Theme';
import ReactQueryProviderContainer from './components/Providers/Query';
import { AppRoutes } from './routes';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <ReactQueryProviderContainer>
      <ThemeProviderContainer>
        <AppRoutes />
        <GlobalStyle />
      </ThemeProviderContainer>
    </ReactQueryProviderContainer>
  );
}
