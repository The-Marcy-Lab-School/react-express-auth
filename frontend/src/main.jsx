import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import UserContextProvider from './contexts/CurrentUserContextProvider.jsx';
import AllUsersContextProvider from './contexts/AllUsersContextProvider.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContextProvider>
      <AllUsersContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </AllUsersContextProvider>
    </UserContextProvider>,
);
