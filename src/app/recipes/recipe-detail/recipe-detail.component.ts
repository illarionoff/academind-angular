import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipes.model";
import { ShoppingListService } from "src/app/shopping-list/shopping-list.service";
import { ActivatedRoute, Params } from "@angular/router";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  id: number;
  constructor(
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.selectedRecipe = this.recipeService.getRecipe(this.id);
    });
  }

  addIngredients() {
    this.shoppingListService.onIngredientsAdded(
      this.selectedRecipe.ingredients
    );
  }
}
