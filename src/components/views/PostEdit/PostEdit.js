/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Login } from '../Login/Login';
import { NotFound } from '../NotFound/NotFound';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { getLoginState } from '../../../redux/loginRedux';
import { getCurrentUser } from '../../../redux/userRedux';
import { getAllPosts } from '../../../redux/postsRedux';
import styles from './PostEdit.module.scss';

const Component = ({isLogged, currentUser, title, photo, photoTitle, text, price, name, phone, email, author: postAuthorId}) => {
    
  const { isAdmin, id: userId } = currentUser;
  const isPostAuthor = postAuthorId === userId ? true : false;

  if (isLogged && (isPostAuthor || isAdmin)) {
    return (
      <div>
        <main className={styles.layout}>
          <Paper className={styles.paper}>
            <Typography component="h1" variant="h4" align="center">
            Edit your announce
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="name"
                  name="name"
                  label="First name"
                  fullWidth
                  autoComplete="given-name"
                  value={name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email address"
                  fullWidth
                  autoComplete="email"
                  value={email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="title"
                  name="title"
                  label="Title"
                  fullWidth
                  value={title}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="text"
                  name="text"
                  label="Description"
                  fullWidth
                  value={text}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="phone"
                  name="phone"
                  label="Phone"
                  fullWidth
                  value={phone}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="price"
                  name="price"
                  label="Price"
                  fullWidth
                  value={price}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="photo"
                  name="photo"
                  label="Image link"
                  fullWidth
                  value={photo}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="photoTitle"
                  name="photoTitle"
                  label="Image title"
                  fullWidth
                  value={photoTitle}
                />
              </Grid>
            </Grid>
            <div className={styles.buttons}>
              <Button
                variant="contained"
                color="primary"
                className={styles.button}
              >
              Edit
              </Button>
            </div>
          </Paper>
        </main>
      </div>
    );
  } else if (isLogged) {
    return <NotFound />;
  } else {
    return <Login />;
  }
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.array,
  match: PropTypes.object,
  currentUser: PropTypes.object,
  isLogged: PropTypes.bool,
};

const mapStateToProps = state => ({
  post: getAllPosts(state),
  isLogged: getLoginState(state),
  currentUser: getCurrentUser(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as PostEdit,
  Component as PostEditComponent,
};
