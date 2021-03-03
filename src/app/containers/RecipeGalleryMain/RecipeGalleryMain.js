  
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';

export const RecipeGalleryMain = ({recipes, isLoading}) => {
    return (
        <Container  maxWidth="md">
            <Grid container spacing={4}>
                {
                    recipes && (recipes.bLoading || isLoading? <div style={{ width: '100%', padding: '5%', display: 'flex', justifyContent: 'space-evenly' }}><CircularProgress size={60} /></div> :
                        recipes.recipes.map(recipe => (
                            <Grid item key={recipe.id} xs={12} sm={6} md={4}>
                                <Card >
                                    <CardMedia
                                        style={{ paddingTop: '56.25%'}}
                                        image={recipe.imageUrl}
                                        title={recipe.title}
                                    />
                                    <CardContent >
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {recipe.title}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )))}
            </Grid>
        </Container>
    );
};

RecipeGalleryMain.defaultProps = {
    recipes: {},
    isLoading: false
};

RecipeGalleryMain.propTypes = {
    // cheating on the prop type but too lazy to define a shape
    recipes: PropTypes.objectOf(PropTypes.any),
    isLoading: PropTypes.bool
};

function mapStateToProps(state) {
    return {
        recipes : state.recipes,
    };
};
export default connect(mapStateToProps)(RecipeGalleryMain);