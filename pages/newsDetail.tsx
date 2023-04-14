import * as React from 'react';
import {
  useRouteLoaderData,
  json,
  useNavigate,
  redirect,
  useSubmit,
} from 'react-router-dom';
import NewsItemDetail from '../components/newsItemDetail';
import buttonStyles from '../uI/button.module.css';
import Button from '../uI/button';

const NewsDetail = () => {
  const news = useRouteLoaderData('news-detail');
  const navigate = useNavigate();
  const submit = useSubmit();

  const editNewsHandler = () => {
    navigate('edit');
  };
  const deleteNewsHandler = () => {
    const confirm = window.confirm('Are Sure To Delete The News?');
    if (confirm) {
      submit(null, { method: 'DELETE' });
    }
  };
  return (
    <React.Fragment>
      <NewsItemDetail newsItem={news} />
      <Button className={buttonStyles['edit-button']} onClick={editNewsHandler}>
        Edit
      </Button>
      <Button
        className={buttonStyles['edit-button']}
        onClick={deleteNewsHandler}
      >
        Delete
      </Button>
    </React.Fragment>
  );
};

export const loader = async ({ params }) => {
  const newsId = params.newsId;
  const response = await fetch(
    `https://foodorder-35902-default-rtdb.europe-west1.firebasedatabase.app/Events/${newsId}.json`
  );

  if (!response.ok) {
    throw json({ message: 'Somthings went wrong!!' }, { status: 500 });
  }

  return response;
};

export const action = async ({ params, request }) => {
  console.log(params);

  const response = await fetch(
    `https://foodorder-35902-default-rtdb.europe-west1.firebasedatabase.app/Events/${params.newsId}.json`,
    { method: request.method }
  );

  console.log(response);
  if (!response.ok) {
    throw json({ message: 'Deleting Process Is Wrong!!' }, { status: 500 });
  }

  return redirect('/news');
};
export default NewsDetail;
