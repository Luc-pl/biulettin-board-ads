/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

//import clsx from 'clsx';
import { connect } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import { getLoginState } from '../../../redux/loginRedux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Post.module.scss';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardActions } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const Component = ({posts, match, isLogged}) => {

  const post = posts.find(el => el.id === match.params.id);
  const { title, image, imageTitle, description, publicationDate, location, price, id } = post;

  return (
    <Container className={styles.cardGrid} maxWidth="md">
      <Grid item>
        <Card className={styles.card}>
          <CardMedia
            className={styles.cardMedia}
            image={image}
            title={imageTitle}
          />
          <CardContent className={styles.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography>
              {description}
            </Typography>
            <Typography className={styles.cardInfo}>
              {`${location} - ${publicationDate}`}
            </Typography>
            <Typography className={styles.cardPrice}>
              {`Price: ${price}$`}
            </Typography>
          </CardContent>
          <CardActions className={styles.cardActions}>
            {isLogged && (<Button size="medium" color="primary" variant="contained" href={`${process.env.PUBLIC_URL}/post/${id}/edit`}>
              Edit
            </Button>)}
          </CardActions>
        </Card>
      </Grid>
    </Container>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  posts: PropTypes.array,
  match: PropTypes.object,
  isLogged: PropTypes.bool,
};

const mapStateToProps = state => ({
  posts: getAllPosts(state),
  isLogged: getLoginState(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const ReduxContainer = connect(mapStateToProps)(Component);

export {
  //Component as Post,
  ReduxContainer as Post,
  Component as PostComponent,
};
