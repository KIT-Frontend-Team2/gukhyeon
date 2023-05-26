import { ADD_USER, useUserContext } from "../../../../../store/3_context";
import ContextQ2Form2 from "./Form2";

const ContextQ2Form = () => {
  const { userList, dispatch } = useUserContext();

  const handleAddUser = (e) => {
    e.preventDefault();

    const newUser = {
      id: Math.floor(Math.random() * 10000),
      name: e.target.user.value,
    };

    e.target.user.value = "";
    e.target.nickname.value = "";

    dispatch(ADD_USER(newUser));
  };

  return (
    <form onSubmit={handleAddUser}>
      <h1>Q2Form</h1>
      <input placeholder="name" name="user" />
      <input placeholder="nick-name" name="nickname" />
      <button type="submit">추가</button>
      <ContextQ2Form2 userList={userList} />
    </form>
  );
};
export default ContextQ2Form;
