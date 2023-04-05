import * as React from 'react';
import { newsType } from '../src/types';
import * as StaticValues from '../src/staticValues';

const NewsItemDetail = ({ newsItem }: { newsItem: newsType }) => {
  const { title, image, description, date, id, summery } = newsItem;
  return (
    <div>
      <h2>{title}</h2>
      <img src={image ? image : StaticValues.noImage} />
      <p>{description}</p>
      <span>Publish Date:</span>
      <span>{date}</span>
    </div>
  );
};

export default NewsItemDetail;
