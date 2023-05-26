import { useState } from "react";

const Q1Form = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const ingredient = {
      id: Date.now(),
      name,
      price: parseInt(price),
    };
    onSubmit(ingredient);
    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="name"
          placeholder="재료"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        <input
          type="number"
          name="price"
          placeholder="가격"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <button type="submit">추가</button>
    </form>
  );
};
export default Q1Form;
