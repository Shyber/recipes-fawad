  
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import RecipeHelper from '../../helpers/RecipeHelper';
import { filterRecipes } from '../../actions/RecipeActions';

export const RecipeGalleryMain = ({recipes, filter, isLoading, updateFilter}) => {
    const [ isFiltering , setIsFiltering ] = useState(false);
    const [ filterValue , setFilterValue ] = useState('');
    const filteredRecipes  = filter && filter.length > 0 ?  RecipeHelper.getFilteredRecipes(filter, recipes) : recipes;
    let typingLagTimeout;

    const filterChangeHandler = e => {
        setIsFiltering(true);
        setFilterValue(e.target.value);
        if (typingLagTimeout) {
            clearTimeout(typingLagTimeout);
            typingLagTimeout = null;
        }
        typingLagTimeout = setTimeout(() => {
            setIsFiltering(false);
            updateFilter(filterValue);
        }, 800);
    };
    
    return (
        <Container  maxWidth="md" >
            <Box width={1} display="flex" alignItems="center" py={3} flexDirection="column">
                <TextField label="Filter recipes by names or tags" variant="outlined" fullWidth value={filterValue} onChange={filterChangeHandler}/>
                {isFiltering && <LinearProgress color="secondary" style={{width: "99%"}} />}
                {isLoading && <CircularProgress size={60} style={{margin: 16}}/>}
            </Box>
            <Grid container spacing={4}>
                {
                    filteredRecipes && 
                        filteredRecipes.map(recipe => (
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
                                        <Typography gutterBottom variant="caption" color="textSecondary">
                                            {recipe.tags}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
            </Grid>
        </Container>
    );
};

RecipeGalleryMain.defaultProps = {
    recipes: [],
    isLoading: false,
    filter: '',
    updateFilter: () => {}
};

RecipeGalleryMain.propTypes = {
    recipes: PropTypes.array,
    isLoading: PropTypes.bool,
    filter: PropTypes.string,
    updateFilter: PropTypes.func
};

function mapStateToProps({recipes}, componentProps) {
    return {
        recipes : recipes.recipes,
        isLoading: recipes.bLoading || componentProps.isLoading,
        filter: recipes.filter
    };
};
const mapDispatchToProps = (dispatch) => ({
    updateFilter: (searchTerms) => {
        return dispatch(filterRecipes(searchTerms));
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(RecipeGalleryMain);