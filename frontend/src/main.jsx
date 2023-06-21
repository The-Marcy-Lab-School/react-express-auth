import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import UserContextProvider from './contexts/CurrentUserContextProvider.jsx';
import CurrentSusuContextProvider from './contexts/SusuContextProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContextProvider>
  <CurrentSusuContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </CurrentSusuContextProvider>
    </UserContextProvider>
);
