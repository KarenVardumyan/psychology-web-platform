
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'components/shared';
import { ChatContextProvider } from "context/ChatContext"

import theme from 'resources/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ChatContextProvider>
          <Router />
        </ChatContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

