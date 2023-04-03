import * as React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './mainNavigation.module.css';

const MainNavigation = () => {
  const activeClass = ({ isActive }) => (isActive ? classes.active : undefined);
  return (
    <nav className={classes.navigate}>
      <NavLink to="/" className={activeClass}>
        Home
      </NavLink>
      <NavLink to="/news" className={activeClass}>
        News
      </NavLink>
      <NavLink to="/AboutUs" className={activeClass}>
        About Us
      </NavLink>
    </nav>
  );
};

export default MainNavigation;
