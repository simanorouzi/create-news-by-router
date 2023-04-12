import * as React from 'react';
import {
  Form,
  useNavigate,
  useActionData,
  json,
  redirect,
} from 'react-router-dom';
import { newsType } from '../src/types';
import Button from '../uI/button';
import classes from './newsForm.module.css';

const NewsForm = ({ news, method }: { news: newsType; method: string }) => {
  const date = news.date ? news.date.toString() : '';
  const data = useActionData();

  const navigate = useNavigate();
  const cancelClickHandler = () => {
    navigate('..');
  };
  return (
    <Form method={method} className={classes.newsform}>
      <div>
        <label htmlFor="title">title:</label>
        <input
          type="text"
          name="title"
          required
          defaultValue={news ? news.title : ''}
        />
      </div>
      <div>
        <label htmlFor="summery">summery:</label>
        <textarea name="summery" defaultValue={news ? news.summery : ''} />
      </div>
      <div>
        <label htmlFor="description">description:</label>
        <textarea
          name="description"
          required
          defaultValue={news ? news.description : ''}
        />
      </div>
      <div>
        <label htmlFor="date">date:</label>
        <input type="date" name="date" required defaultValue={date} />
      </div>
      <div>
        <label htmlFor="image">image url:</label>
        <input type="text" name="image" defaultValue={news ? news.image : ''} />
      </div>
      <Button type="submit">Save</Button>
      <Button onClick={cancelClickHandler}>Cancel</Button>
    </Form>
  );
};

export const action = async ({ request, params }) => {
  const data = await request.formData();

  const news: newsType = {
    title: data.get('title'),
    summery: data.get('summery'),
    description: data.get('description'),
    date: data.get('date'),
    image: data.get('image'),
    id: Math.random().toString(),
  };

  const newsRequest = {
    method: request.method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(news),
  };
  console.log(data);

  let url =
    'https://foodorder-35902-default-rtdb.europe-west1.firebasedatabase.app/Events.json';

  if (request.method == 'PATCH')
    url = `https://foodorder-35902-default-rtdb.europe-west1.firebasedatabase.app/Events/${params.newsId}.json`;

  const response = await fetch(url, newsRequest);

  if (!response.ok) {
    throw json();
  }
  redirect('/news');
};

export default NewsForm;
