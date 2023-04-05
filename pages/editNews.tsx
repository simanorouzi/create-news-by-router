import * as React from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import NewsForm from '../components/newsForm';

const EditNews = () => {
  const news = useRouteLoaderData('news-detail');
  return <NewsForm news={news} />;
};

export default EditNews;
