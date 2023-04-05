import * as React from 'react';
import {
  useParams,
  useRouteLoaderData,
  json,
  useNavigate,
} from 'react-router-dom';
import NewsItem from '../components/newsItem';
import NewsItemDetail from '../components/newsItemDetail';
import classes from '../components/news.module.css';
import buttonStyles from '../uI/button.module.css';
import Button from '../uI/button';

const NewsDetail = () => {
  const news = useRouteLoaderData('news-detail');
  const navigate = useNavigate();
  const editClickHandler = () => {
    navigate('edit');
  };
  return (
    <React.Fragment>
      <NewsItemDetail newsItem={news} />
      <Button
        className={buttonStyles['edit-button']}
        onClick={editClickHandler}
      >
        Edit
      </Button>
      <Button className={buttonStyles['edit-button']}>Delete</Button>
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
