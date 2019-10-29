  
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';

class RecipeGalleryMain extends React.Component{

    render() {
        const {recipes} = this.props;
        return (
            <Container  maxWidth="md">
                <Grid container spacing={4}>
                    {
                        recipes.bLoading? <div style={{ width: '100%', padding: '5%', display: 'flex', justifyContent: 'space-evenly' }}><CircularProgress size={60} /></div> :
                        recipes.recipes.contents.map(recipe => (
                        <Grid item key={recipe.contentId} xs={12} sm={6} md={4}>
                            <Card >
                                <CardMedia
                                    style={{ paddingTop: '56.25%'}}
                                    image={recipe.imageList.landscape32small1x.url}
                                    title={recipe.title}
                                />
                                <CardContent >
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {recipe.title}
                                    </Typography>
                                    <Typography>
                   Recipe Description
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        recipes : state.recipes,
    };
};
export default connect(mapStateToProps)(RecipeGalleryMain);