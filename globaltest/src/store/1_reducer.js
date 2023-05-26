const initialState = {
  ingredients: [
    { id: 1, name: "피자 도우", price: 1000 },
    { id: 2, name: "토마토 소스", price: 500 },
    { id: 3, name: "치즈", price: 1000 },
    { id: 4, name: "피망", price: 500 },
    { id: 5, name: "양파", price: 500 },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_INGREDIENT":
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case "DELETE_INGREDIENT":
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (ingredient) => ingredient.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default reducer;
