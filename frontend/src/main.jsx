import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import UserContextProvider from './contexts/CurrentUserContextProvider.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContextProvider>
      <BrowserRouter>
        <App className="flex flex-col h-screen w-screen"/>
      </BrowserRouter>
    </UserContextProvider>,
);
