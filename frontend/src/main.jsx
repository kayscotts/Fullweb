import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from "react-redux";
import './index.css'
import store from "./redux/store";
import { HelmetProvider } from 'react-helmet-async';
import Home from "./pages/Home.jsx";
import {Route,Routes,BrowserRouter,
createBrowserRouter} from "react-router";
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
  <HelmetProvider>
    <App />
  </HelmetProvider>
  </BrowserRouter>
 </Provider>
)
