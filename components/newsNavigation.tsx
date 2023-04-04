import * as React from 'react';
import classess from './news.module.css';
import { NavLink } from 'react-router-dom';

const NewsNavigation = () => {
  const activeClass = ({ isActive }) =>
    isActive ? classess.active : undefined;
  return (
    <div className={classess['news-navigation']}>
      <NavLink to="/news" className={activeClass} end>
        All News
      </NavLink>
      <NavLink to="/news/add" className={activeClass} end>
        Add News
      </NavLink>
    </div>
  );
};

export default NewsNavigation;
