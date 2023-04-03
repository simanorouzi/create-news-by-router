import * as React from 'react';
import MainNavigation from '../components/mainNavigation';
import { Outlet } from 'react-router-dom';
const Main = () => {
  return (
    <div>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
