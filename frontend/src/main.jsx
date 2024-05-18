import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import UserContextProvider from './contexts/CurrentUserContextProvider.jsx';
import CloudinaryContextProvider from './contexts/CloudinaryContextProvider.jsx'
import './styles/index.css';
import './styles/utilities.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <CloudinaryContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CloudinaryContextProvider>
  </UserContextProvider>,
);
