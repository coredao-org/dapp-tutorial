import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import Campaign from './Campaign.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/campaign/:campaignAddress',
    element: <Campaign />,
  },
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
