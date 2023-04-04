import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddNews from './pages/addNews';
import ErrorPage from './pages/error';
import Home from './pages/home';
import Main from './pages/main';
import News, { loader as newsLoader } from './pages/news';
import NewsDetail, { loader as newsDetailLoader } from './pages/newsDetail';
import NewsLayout from './pages/newsLayout';
import './style.css';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'news',
          element: <NewsLayout />,
          children: [
            {
              index: true,
              element: <News />,
              loader: newsLoader,
            },
            {
              path: ':newsId',
              element: <NewsDetail />,
              loader: newsDetailLoader,
            },
            {
              path: 'add',
              element: <AddNews />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
