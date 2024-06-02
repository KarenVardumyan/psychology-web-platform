
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'components/shared';
import { ChatContextProvider } from "context/ChatContext"

function App() {
  return (
    <BrowserRouter>
      <ChatContextProvider>
        <Router />
      </ChatContextProvider>
    </BrowserRouter>
  );
}

export default App;

