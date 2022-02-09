import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Cards.module.scss';

const posts = [1, 2, 3, 4, 5, 6];

const Component = ({className, children}) => {
  return (
    <Container className={styles.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {posts.map((post) => (
          <Grid item key={post} xs={12} sm={6} md={4}>
            <Card className={styles.card}>
              <CardMedia
                className={styles.cardMedia}
                image="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                title="Image title"
              />
              <CardContent className={styles.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    Lorem ipsum
                </Typography>
                <Typography>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                    View
                </Button>
                <Button size="small" color="primary">
                    Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

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
  Component as Cards,
  // Container as Cards,
  Component as CardsComponent,
};
