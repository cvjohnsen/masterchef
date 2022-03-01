const Recipes = (props) => {
  return (
    //recipe is the key name so need to be passed!
    <div className="ranRecipes">
      <img src={props.recipe.strMealThumb} />
      <h4>Meals: {props.recipe.strMeal}</h4>
      <h4>Category: {props.recipe.strCategory}</h4>
      <h4>Area: {props.recipe.strArea}</h4>
      <p>strInstructions: {props.recipe.strInstructions}</p>
    </div>
  );
};

export default Recipes;
