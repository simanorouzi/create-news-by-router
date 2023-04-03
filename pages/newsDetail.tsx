import * as React from 'react';
import { useParams, useLoaderData } from 'react-router-dom';

const NewsDetail = () => {
  const param = useParams();

  return <h1>{param.newsId}</h1>;
};

export const loader = () => {};

export default NewsDetail;
