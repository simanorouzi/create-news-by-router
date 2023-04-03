import * as React from 'react';
import NewsList from '../components/newsList';
import { json, useLoaderData } from 'react-router-dom';
import classes from '../components/news.module.css';

const News = () => {
  const news = useLoaderData();

  const data = Object.entries(news).map(([key, value]) => {
    return {
      id: key,
      title: value.title,
      summery: value.summery,
      description: value.description,
      image: value.image,
    };
  });

  return (
    <div className={classes.card}>
      <button className={classes['add-news']}>Add News</button>
      <NewsList list={data} />
    </div>
  );
};

export const loader = async () => {
  const response = await fetch(
    'https://foodorder-35902-default-rtdb.europe-west1.firebasedatabase.app/Events.json'
  );

  if (!response.ok) {
    throw json({ message: 'fetch news went wrong!' }, { status: 500 });
  } else {
    return response;
  }
};
export default News;
