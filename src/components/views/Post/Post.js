/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
//import clsx from 'clsx';
import { connect } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import { getLoginState } from '../../../redux/loginRedux';
import { getCurrentUser } from '../../../redux/userRedux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import { Link } from 'react-router-dom';
import styles from './Post.module.scss';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardActions } from '@material-ui/core';
import Button from '@material-ui/core/Button';
//import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const Component = ({posts, match, isLogged, currentUser}) => {

  const post = posts.find(el => el.id === match.params.id);
  const { title, photo, photoTitle, text, created, status, location, price, id, name, update, phone, email, author: postAuthorId } = post;
  const { isAdmin, id: userId } = currentUser;
  const isPostAuthor = postAuthorId === userId ? true : false;

  return (
    <Container className={styles.cardGrid} maxWidth="md">
      <Grid item>
        <Card className={styles.card}>
          <CardMedia
            className={styles.cardMedia}
            image={photo}
            title={photoTitle}
          />
          <CardContent className={styles.cardContent}>
            <Typography className={styles.cardInfo}>
              {`${location} - ${created}`}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2" className={styles.cardTitle}>
              {title}
            </Typography>
            <Typography className={styles.cardPrice}>
              {`Price: ${price}$`}
            </Typography>
            <Typography className={styles.cardDesc}>
              {text}
            </Typography>
            <Typography className={styles.cardAuthor}>
              {`Seller: ${name}`}
            </Typography>
            <Typography className={styles.cardPhone}>
              {`Phone: ${phone}`} 
            </Typography>
            {(isLogged && (isPostAuthor || isAdmin)) && (<Typography>
              {`Status: ${status}`}
            </Typography>)}
          </CardContent>
          <CardActions className={styles.cardActions}>
            {(isLogged && (isPostAuthor || isAdmin)) && (<Button component={Link} size="medium" color="primary" variant="contained" to={`${process.env.PUBLIC_URL}/post/${id}/edit`}>
                Edit
            </Button>)}
            <Button size="medium" color="primary" variant="contained" href={`mailto:${email}`}>
              Email to seller
            </Button>
            <Typography className={styles.publicationDate}>
              {`Edited: ${update}`}
            </Typography>
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
  currentUser: PropTypes.object,
};

const mapStateToProps = state => ({
  posts: getAllPosts(state),
  isLogged: getLoginState(state),
  currentUser: getCurrentUser(state),
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
