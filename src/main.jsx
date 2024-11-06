import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Statistics from './components/Statistics/Statistics';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';
import CartItems from './components/CartItems/CartItems';
import WishItems from './components/WishItems/WishItems';
import ExploreBtns from './components/ExploreBtns/ExploreBtns';
import ExploreCntnt from './components/ExploreCntnt/ExploreCntnt';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: '/',
            element: <ExploreCntnt></ExploreCntnt>,
            loader: () => fetch('../gadgetsData.json')
          },
          {
            path: '/category/:category',
            element: <ExploreCntnt></ExploreCntnt>,
            loader: () => fetch('../gadgetsData.json')
          }
        ]
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard/cart",
            element: <CartItems></CartItems>,
            loader: () => fetch('../gadgetsData.json')
          },
          {
            path: "/dashboard/wishlist",
            element: <WishItems></WishItems>,
            loader: () => fetch('../gadgetsData.json')
          }
        ]
      },
      {
        path: "/product/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('../gadgetsData.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
