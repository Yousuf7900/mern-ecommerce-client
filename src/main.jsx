import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './router/routes'
import ShopContextProvider from './context/ShopContext'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopContextProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </ShopContextProvider>
  </StrictMode>,
)
