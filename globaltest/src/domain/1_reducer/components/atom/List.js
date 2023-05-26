const ReducerQ1List = ({ ingredients, deleteIngredient }) => {
  const handleDeleteIngredient = (ingredientId) => {
    deleteIngredient(ingredientId);
  };
  return (
    <tbody>
      {ingredients.map((ingredient) => (
        <tr>
          <td>{ingredient.name}</td>
          <td>{ingredient.price}</td>
          <td>
            <button onClick={() => handleDeleteIngredient(ingredient.id)}>
              삭제
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
export default ReducerQ1List;
