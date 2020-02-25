import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipes.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("test", "test desc", "https://via.placeholder.com/150"),
    new Recipe("test", "test desc", "https://via.placeholder.com/150"),
    new Recipe("test", "test desc", "https://via.placeholder.com/150")
  ];
  constructor() {}

  ngOnInit(): void {}
}
