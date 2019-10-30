import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { fetchRecipes } from '../../actions/RecipeActions';
import { RecipeGalleryMain } from '../RecipeGalleryMain';

export class RecipesApp extends React.Component{
    
    render(){
        const {dispatchFetchRecipes} = this.props;
        return (
            <main>
                <div >
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom style={{paddingTop:10}}>Recipe Gallery
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>|React|Redux|Thunk|MaterialUI|</Typography>
                        <div >
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary" onClick={()=>{ dispatchFetchRecipes(); }}>
                    Load Recipes
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <RecipeGalleryMain />
            </main>);
    }
};

function mapStateToProps(state) {
    return {
        recipes : state.recipes,
    };
};
const mapDispatchToProps = (dispatch) => ({
    dispatchFetchRecipes: () => {
        return dispatch(fetchRecipes());
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(RecipesApp);