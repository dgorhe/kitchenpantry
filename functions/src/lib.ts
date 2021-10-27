import { firestore } from "firebase-admin";
export class Ingredient {
    name: string;
    quantity: number;
    meat: boolean;
    tags: string[];
    lastUpdated: firestore.Timestamp

    constructor(name: string, quantity: number, tags: string[], meat: boolean, lu: firestore.Timestamp) {
        this.name = name;
        this.quantity = quantity;
        this.tags = tags;
        this.meat = meat;
        this.lastUpdated = lu;
    }

    changeQuantity(qty: number): void {
        // Check qty for some characteristics
        this.quantity = qty
        this.lastUpdated = firestore.Timestamp.now();
    }
}

export class Recipe {
    name: string;
    vegetarian: boolean;
    ingredients: Ingredient[];

    constructor(name: string, vegetarian: boolean, ingredients: Ingredient[]) {
        this.name = name;
        this.vegetarian = vegetarian;
        this.ingredients = ingredients;
    }
}

export class user {
    name: string;
    gender: string;
    foodAllergies: string[] // Might need to change this to a DocumentReference

    constructor(name: string, gender: string, foodAllergies: string[]) {
        this.name = name;
        this.gender = gender;
        this.foodAllergies = foodAllergies;
    }
}
