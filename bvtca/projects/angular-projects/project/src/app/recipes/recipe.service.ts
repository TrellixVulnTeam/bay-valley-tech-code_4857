import { Recipe } from "./recipe.model";

export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('a test recipe', 'this is a test',
         'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F_tbCqVl2yqf8%2FSwC8Hfs63kI%2FAAAAAAAABP4%2FHb01mzs9GEU%2Fs1600%2FBeef%2BEmpanadas%2B003-1.jpg&f=1&nofb=1'),
         new Recipe('another test recipe', 'this is a test',
         'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F_tbCqVl2yqf8%2FSwC8Hfs63kI%2FAAAAAAAABP4%2FHb01mzs9GEU%2Fs1600%2FBeef%2BEmpanadas%2B003-1.jpg&f=1&nofb=1')
         
      ];

      getRecipes(){
          return this.recipes.slice();  //slice will return an exact copy of the array on the file.
      }
}