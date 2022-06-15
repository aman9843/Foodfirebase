import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import { UserContextProvider } from './context/UserContextProvider';
import { StateProvider } from './context/stateProvision';
import reducer from './context/reducer';
import { initialState } from './context/initialState';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
        <UserContextProvider>
  <React.StrictMode>
  <StateProvider initialState={initialState} reducer={reducer}> 
    <App />
    </StateProvider>
  </React.StrictMode>
  </UserContextProvider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
