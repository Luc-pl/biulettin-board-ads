/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { getLoginState } from '../../../redux/loginRedux';

import { Login } from '../Login/Login';
//import clsx from 'clsx';
import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

//import styles from './MyPost.module.scss';

const Component = ({ isLogged }) => {

  if (isLogged) {
    return (
      <div>
        <h2>MyPosts</h2>
      </div>
    );
  } else {
    return <Login />;
  }
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isLogged: PropTypes.bool,
};

const mapStateToProps = state => ({
  isLogged: getLoginState(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as MyPost,
  Container as MyPost,
  Component as MyPostComponent,
};
