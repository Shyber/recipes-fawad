
import {transformRecipes} from './transforms/RecipeTransform';
import recipesMockData from '../../../data/recipesMockData';

export default class RecipeService {   
    static getAllRecipes() {
        // const uri = `${API_BASE_ADDRESS  }/recipes`;
        // return fetch(uri, {method: 'GET'});
        const promise1 = new Promise(function(resolve, reject) {
            setTimeout(function() {
                try{
                    resolve(transformRecipes(recipesMockData));
                }catch(error){
                    reject(error);
                }
            }, 300);
        });
        return promise1;
    }
}