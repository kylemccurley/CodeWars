/*
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). 

For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 

Ingredients that are not present in the objects, can be considered as 0.

Input: Recipe Object, Available ingredients (object)
Output: Maximum Number of Cakes Pete Can Bake (Integer)

Rules/Requirements:
  - No units
  - Ingredients not included in the objedct are considered 0
  
Algorithm: Given 2 hashes: Recipe, Available ingredients:
  - Initialize a local variable: cakeCreations
    - Set to an empty array
  - Iterate through each entry of recipe: |item, value|
    - Reference item in available ingredients:
      - If falsey value:
        - Return 0
      - Otherwise:
        - Divide value in available ingredients with recipe value
          - Round down
        - Add the result to cakeCreations
  - Return the minimum value of cakeCreations
*/

function cakes(recipe, availableIngredients) {
  let cakeCreations = [];
  for (let [ingredient, quantity] of Object.entries(recipe)) {
    if (!(availableIngredients[ingredient])) {
      return 0;
    } else {
      let maxCakesForIngredient = Math.floor(availableIngredients[ingredient] / quantity);
      cakeCreations.push(maxCakesForIngredient);
    }
  }
  
  return cakeCreations.reduce(min);
  
  function min(min, value) {
    return (value < min) ? value : min;
  }
}

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 
