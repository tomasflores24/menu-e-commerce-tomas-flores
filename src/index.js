import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './store/cart-context';

const firebaseConfig = {
  apiKey: "AIzaSyAjh5mAtOXETXGidSfEAervRzbEXrj5oAY",
  authDomain: "proyecto-final-tomas-flores.firebaseapp.com",
  projectId: "proyecto-final-tomas-flores",
  storageBucket: "proyecto-final-tomas-flores.appspot.com",
  messagingSenderId: "973535355545",
  appId: "1:973535355545:web:fd51bcebc9b781b8e04e08"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
