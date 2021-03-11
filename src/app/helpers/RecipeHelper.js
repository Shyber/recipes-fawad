
const RecipeHelper = {
    getFilteredRecipes: (filter, recipes) => {
        // We're gonna split up the search terms into an array
        const terms = filter && filter.toLowerCase().split(',');
        if(!recipes || !terms || terms.length === 0)
            return recipes;
        
        // We'll reduce a result array by concatenating results for each search term that matches the recipe
        return terms.reduce( (filteredRecipes, term) => {
            return [ ...filteredRecipes, 
                ...recipes.filter( recipe => recipe && 
                                            term && 
                                            term.length > 0 && 
                                            !filteredRecipes.some( filteredRecipe => filteredRecipe.id === recipe.id ) && 
                                            (recipe.title.toLowerCase().includes(term) || recipe.tags.toLowerCase().includes(term))
                ) 
            ];
        }, []);
    }
};

export default RecipeHelper;
