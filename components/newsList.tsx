import * as React from 'react';
import { newsType } from '../src/types';
import NewsItem from './newsItem';
import classes from './news.module.css';

const NewsList = ({ list }: { list: newsType[] }) => {
  return (
    <ul className={classes.news}>
      {list.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default NewsList;
