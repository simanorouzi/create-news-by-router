import * as React from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { newsType } from '../src/types';
import Button from '../uI/button';
import classes from './newsForm.module.css';

const NewsForm = ({ news }) => {
  // const date = news.date ? news.date.toString() : '';
  const navigate = useNavigate();
  const cancelClickHandler = () => {
    navigate('..');
  };
  return (
    <Form method="post" className={classes.newsform}>
      <div>
        <label htmlFor="title">title:</label>
        <input type="text" name="title" required defaultValue={news.title} />
      </div>
      <div>
        <label htmlFor="summery">summery:</label>
        <textarea name="summery" defaultValue={news.summery} />
      </div>
      <div>
        <label htmlFor="description">description:</label>
        <textarea name="description" required defaultValue={news.description} />
      </div>
      <div>
        <label htmlFor="date">date:</label>
        {/* <input type="date" name="date" required defaultValue={date} /> */}
      </div>
      <div>
        <label htmlFor="image">image url:</label>
        <input type="text" name="image" defaultValue={news.image} />
      </div>
      <Button type="submit">Save</Button>
      <Button onClick={cancelClickHandler}>Cancel</Button>
    </Form>
  );
};

export default NewsForm;
