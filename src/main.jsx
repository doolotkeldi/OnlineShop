import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18next from "./locales/i18next.js"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
