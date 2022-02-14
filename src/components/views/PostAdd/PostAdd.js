/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import { Login } from '../Login/Login';
import { connect } from 'react-redux';
import { getLoginState } from '../../../redux/loginRedux';
import styles from './PostAdd.module.scss';

const Component = (className, isLogged) => {
  if(isLogged) {
    return (
      <div className={clsx(className, styles.root)}>
        <main className={styles.layout}>
          <Paper className={styles.paper}>
            <Typography component="h1" variant="h4" align="center">
            Add your new announce
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="authorName"
                  name="authorName"
                  label="First name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="authorEmail"
                  name="authorEmail"
                  label="Email address"
                  fullWidth
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="title"
                  name="title"
                  label="Title"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="description"
                  name="description"
                  label="Description"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="phone"
                  name="phone"
                  label="Phone"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="price"
                  name="price"
                  label="Price"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="image"
                  name="image"
                  label="Image link"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="imageTitle"
                  name="imageTitle"
                  label="Image title"
                  fullWidth
                />
              </Grid>
            </Grid>
            <div className={styles.buttons}>
              <Button
                variant="contained"
                color="primary"
                className={styles.button}
              >
              Add
              </Button>
            </div>
          </Paper>
        </main>
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
  Container as PostAdd,
  Component as PostAddComponent,
};
