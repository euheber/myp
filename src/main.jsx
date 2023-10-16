import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './routes/routes'
import Header from "./components/headerComponent/Header"
import { RouterProvider } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
