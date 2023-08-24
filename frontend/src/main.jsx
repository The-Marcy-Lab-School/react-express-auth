import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import UserContextProvider from './contexts/CurrentUserContextProvider.jsx';
import QuizContextProvider from './contexts/QuizContextProvider.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContextProvider>
      <QuizContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </QuizContextProvider>
    </UserContextProvider>
    
);
