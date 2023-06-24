import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import UserContextProvider from './contexts/CurrentUserContextProvider.jsx';
import PostProvider from './contexts/PostProvider.jsx'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <PostProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PostProvider>
  </UserContextProvider>,
);
