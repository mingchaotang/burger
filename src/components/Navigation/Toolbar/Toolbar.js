import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawer from '../SideDrawer/SideDrawer';

const toolbar = props => (
  <header className={classes.Toolbar}>
    <SideDrawer />
    <Logo />
    <NavigationItems />
  </header>
);

export default toolbar;
