import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Footer.module.scss';

const Component = ({className, children}) => (
  <footer className={clsx(className, styles.root)}>
    <Typography variant="h6" align="center" gutterBottom>
      Free Announce!
    </Typography>
    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
      Local announcements
    </Typography>
  </footer>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Footer,
  // Container as Footer,
  Component as FooterComponent,
};
