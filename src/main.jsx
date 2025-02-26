import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router";
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
]);
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} >
    <StrictMode>
      <App />
    </StrictMode>,
  </RouterProvider>

)
