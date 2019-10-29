
const API_BASE_ADDRESS = '/data';

export default class Api {   
    static getRecipes() {
        const uri = API_BASE_ADDRESS + "/recipes";
        return fetch(uri, {method: 'GET'});
    }

}