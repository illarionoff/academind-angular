import { Recipe } from "./recipes.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe("test", "test desc", "https://via.placeholder.com/150", [
      new Ingredient("Pasta", 1),
      new Ingredient("Pasta", 1),
      new Ingredient("Pasta", 1)
    ]),
    new Recipe("test2", "test desc", "https://via.placeholder.com/150", [
      new Ingredient("Pasta", 1),
      new Ingredient("Pasta", 1),
      new Ingredient("Pasta", 1)
    ]),
    new Recipe("test3", "test desc", "https://via.placeholder.com/150", [
      new Ingredient("Pasta", 1),
      new Ingredient("Pasta", 1),
      new Ingredient("Pasta", 1)
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
