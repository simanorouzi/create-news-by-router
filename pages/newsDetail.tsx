import * as React from 'react';
import { useParams, useLoaderData, json } from 'react-router-dom';
import NewsItem from '../components/newsItem';
import NewsItemDetail from '../components/newsItemDetail';
import classes from '../components/news.module.css';

const NewsDetail = () => {
  const news = useLoaderData();
  return (
    <React.Fragment>
      <NewsItemDetail newsItem={news} />
      <button className={classes['add-news']}>Edit</button>
      <button className={classes['add-news']}>Delete</button>
    </React.Fragment>
  );
};

export const loader = async ({ request, params }) => {
  const newsId = params.newsId;
  const response = await fetch(
    `https://foodorder-35902-default-rtdb.europe-west1.firebasedatabase.app/Events/${newsId}.json`
  );

  if (!response.ok) {
    throw json({ message: 'Somthings went wrong!!' }, { status: 500 });
  }

  return response;
};

export default NewsDetail;
