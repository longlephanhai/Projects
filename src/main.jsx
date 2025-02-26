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
import NotFound from './pages/NotFound.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<NotFound/>,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,


)
