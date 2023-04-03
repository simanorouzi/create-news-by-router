import * as React from 'react';
import { Outlet } from 'react-router-dom';
import NewsNavigation from '../components/newsNavigation';

const NewsLayout = () => {
  return (
    <React.Fragment>
      <NewsNavigation />
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
};

export default NewsLayout;
