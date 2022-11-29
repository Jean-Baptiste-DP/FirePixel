import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom"
import './index.css'

import Root from './routes/root'
import Error from './routes/error'
import Screen from './routes/screen'
import Phone from './routes/phone'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "screen",
        element: <Screen />,
      },
      {
        path: "phone",
        element: <Phone />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
