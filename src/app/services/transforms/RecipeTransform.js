
export const transformRecipes = (rawData) => {
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
};