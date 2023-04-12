import * as React from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import NewsForm from '../components/newsForm';

const EditNews = () => {
  const news = useRouteLoaderData('news-detail');
  return (
    <React.Fragment>
      <h1>Edit News</h1>
      <NewsForm news={news} />
    </React.Fragment>
  );
};

export default EditNews;
