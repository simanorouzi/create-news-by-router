import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddNews from './pages/addNews';
import EditNews from './pages/editNews';
import ErrorPage from './pages/error';
import Home from './pages/home';
import Main from './pages/main';
import News, { loader as newsLoader } from './pages/news';
import { action as sendNewsAction } from './components/newsForm';
import NewsDetail, {
  loader as newsDetailLoader,
  action as deleteNewsAction,
} from './pages/newsDetail';
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
              id: 'news-detail',
              loader: newsDetailLoader,
              children: [
                {
                  index: true,
                  element: <NewsDetail />,
                  action: deleteNewsAction,
                },
                {
                  path: 'edit',
                  element: <EditNews />,
                  action: sendNewsAction,
                },
              ],
            },
            {
              path: 'add',
              element: <AddNews />,
              action: sendNewsAction,
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
