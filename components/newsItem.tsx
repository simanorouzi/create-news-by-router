import * as React from 'react';
import { newsType } from '../src/types';
import { Link } from 'react-router-dom';
import classes from './news.module.css';
import * as StaticValues from '../src/staticValues';

const NewsItem = ({ item }: { item: newsType }) => {
  return (
    <li>
      <img src={item.image ? item.image : StaticValues.noImage} />
      <h2>
        <Link to={item.id}>{item.title}</Link>
      </h2>
      <p className={classes.summery}>{item.summery}</p>
    </li>
  );
};

export default NewsItem;
