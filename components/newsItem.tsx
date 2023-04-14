import * as React from 'react';
import { newsType } from '../src/types';
import { Link, useSubmit } from 'react-router-dom';
import classes from './news.module.css';
import * as StaticValues from '../src/staticValues';
import Button from '../uI/button';

const NewsItem = ({ item }: { item: newsType }) => {
  const submit = useSubmit();
  const removeNewsHandler = () => {
    const confirm = window.confirm('Are Sure To Delete The News?');
    if (confirm) {
      // submit(null, { method: 'DELETE' });
    }
  };
  return (
    <li>
      <img src={item.image ? item.image : StaticValues.noImage} />
      <h2>
        <Link to={item.id}>{item.title}</Link>
      </h2>
      <p className={classes.summery}>{item.summery}</p>
      <Button onClick={removeNewsHandler}>Remove</Button>
    </li>
  );
};

export default NewsItem;
