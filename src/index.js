import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-06-phonebook-new">
      <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
