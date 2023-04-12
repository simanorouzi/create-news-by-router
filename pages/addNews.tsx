import * as React from 'react';
import NewsForm from '../components/newsForm';

const AddNews = () => {
  return (
    <React.Fragment>
      <h1>Add News</h1>
      <NewsForm method="POST" />
    </React.Fragment>
  );
};

export default AddNews;
