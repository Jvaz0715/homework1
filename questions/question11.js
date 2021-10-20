// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 
//  Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var user = {
  name: 'pete',
  age: '32',
  favoriteThings: {
    food: ['pizza', 'tacos', 'burgers', 'italian'],
    movies: [],
  },
};

let favoriteFoods = user.favoriteThings.food;
console.log(favoriteFoods)

// Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values.
let topTwoFavorites =[favoriteFoods[0], favoriteFoods[1]];
console.log(topTwoFavorites)