
export default class RecipeTransform{
    static transformRecipes(rawData){
        try{
            return rawData.contents.map(x => ({ 
                id: x.contentId,
                title: x.title,
                imageUrl: x.imageList.landscape32small1x.url
            }) );
        }catch(err){
            console.warn(`transformRecipes error: ${err}`);
            return [];
        }
    }

    static filterAndTransformRecipe(recipeId,rawData){
        try{
            return rawData.contents.filter(x => x.contentId === recipeId).map(x => ({ 
                id: x.contentId,
                title: x.title,
                imageUrl: x.imageList.landscape32small1x.url
            }) );
        }catch(err){
            console.warn(`filterAndTransformRecipe error: ${err}`);
            return null;
        }
    }
}

