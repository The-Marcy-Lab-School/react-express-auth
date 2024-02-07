import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import UserContextProvider from './contexts/CurrentUserContextProvider.jsx';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <BrowserRouter>
      <ChakraProvider>
      <App className="flex flex-col h-screen w-screen"/>
      </ChakraProvider>
    </BrowserRouter>
  </UserContextProvider>,
);
