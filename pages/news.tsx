import * as React from 'react';
import NewsList from '../components/newsList';
import { json, useLoaderData } from 'react-router-dom';
import classes from '../components/news.module.css';
import Button from '../uI/button';
import NewsFilter from '../components/newsFilter';

const News = () => {
  const [keyword, setKeyword] = React.useState('');
  const [list, setList] = React.useState([]);

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

  console.log(news);
  React.useEffect(() => {
    setList(data.filter((item) => item.title.includes(keyword)));
  }, [keyword]);

  const filterHandler = (key) => {
    setKeyword(key);
  };
  return (
    <div className={classes.card}>
      <NewsFilter onFilter={filterHandler} />
      <Button className={classes['add-news']}>Add News</Button>
      <NewsList list={list} />
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
