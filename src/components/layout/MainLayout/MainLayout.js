import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { updateLoginStatus } from '../../../redux/loginRedux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './MainLayout.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <AppBar>
      <Container maxWidth='lg'>
        <Toolbar disableGutters>
          <select onChange={(e) => updateLoginStatus(e.target.value)} >
            <option value="login">Login</option>
            <option value="logout">Logout</option>
            <option value="admin">admin</option>
          </select>
        </Toolbar>
      </Container>
    </AppBar>
    <Container maxWidth='lg'>
      <Toolbar />
      {children}
    </Container>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  updateLoginStatus: PropTypes.func,
};

const mapStateToProps = state => ({
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const mapDispatchToProps = dispatch => ({
  updateLoginStatus: log => dispatch(updateLoginStatus(log)),
});

const ReduxContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  ReduxContainer as MainLayout,
  Component as MainLayoutComponent,
};
