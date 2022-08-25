import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import { AuthProvider } from './context/authContext'
import { CategoriaProvider } from './context/categoriaContext'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <BrowserRouter >
            <CategoriaProvider>
              <App />
            </CategoriaProvider>
        </BrowserRouter>
  </React.StrictMode>
)
