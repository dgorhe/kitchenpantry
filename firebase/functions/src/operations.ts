// import { Recipe, User, Ingredient } from "./lib";

/*
 * Ingredient Operations
 */
export const _addIngredient = async (ingredients: string | string[], auth: any) => {
    if (Array.isArray(ingredients)) {
        // add ingredients in batch, remember to use try-catch
    } else {
        // add single ingredient, remember to use try-catch
    }
    console.log(ingredients);
    console.log(auth);
};

export const _removeIngredient = async (ingredientId: string, auth: any) => {

};

/*
 * Recipe Operations
 */
export const _addRecipe = async (data: {string: string[]}, auth: any) => {

};

export const _removeRecipe = async (recipeId: string | string[], auth: any) => {

};


/*
 * User Operations
 */
export const _addUser = async (data: {string: string[]}, auth: any) => {

};

export const _removeUser = async (userId: string | string[], auth: any) => {

};

