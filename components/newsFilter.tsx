import * as React from 'react';
import { NewsFilterType } from '../src/types';
import Button from '../uI/button';

const NewsFilter = (props: NewsFilterType) => {
  const filterChangeHandler = (event) => {
    props.onFilter(event.target.value);
  };
  return (
    <div>
      <label htmlFor="keyword">Search:</label>
      <input type="text" onChange={filterChangeHandler} name="keyword" />
    </div>
  );
};

export default NewsFilter;
