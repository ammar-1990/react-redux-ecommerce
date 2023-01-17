import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from "./App/store";
import { Provider } from "react-redux";
import { Toaster } from 'react-hot-toast';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
    <Toaster  position="bottom-right"/>
    </BrowserRouter>
    </Provider>

  </React.StrictMode>
);

