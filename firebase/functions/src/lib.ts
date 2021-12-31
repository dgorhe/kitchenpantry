import { firestore } from "firebase-admin";
// import * from "./error"

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
        if (qty < 0) {
            // throw error
        } else {
            this.quantity = qty;
            this.lastUpdated = firestore.Timestamp.now();
        }
    }
}

export class Recipe {
    name: string;
    vegetarian: boolean;
    ingredients: Ingredient[] | firestore.DocumentReference[];
    directions: string[];

    constructor(name: string, vegetarian: boolean, ingredients: Ingredient[], dir: string[]) {
        this.name = name;
        this.vegetarian = vegetarian;
        this.ingredients = ingredients;
        this.directions = dir;
    }
}

export class User {
    name: string;
    gender: string;
    foodAllergies?: string[];

    constructor(name: string, gender: string, allergies?: string[]) {
        this.name = name;
        this.gender = gender;

        if (allergies !== null) {
            this.foodAllergies = allergies;
        }
    }
}
