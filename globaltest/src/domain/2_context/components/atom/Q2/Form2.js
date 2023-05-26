import { ADD_EDIT, useUserContext } from "../../../../../store/3_context";

const ContextQ2Form2 = ({ userList }) => {
  const { dispatch } = useUserContext();
  const handleEdit = (id) => {
    dispatch(ADD_EDIT(id));
  };

  if (!Array.isArray(userList) || userList.length === 0) {
    return null;
  }

  return (
    <div>
      <h1>Q2Form2</h1>
      <ul>
        {userList.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      {userList.map((user) => (
        <button key={user.id} onClick={() => handleEdit(user.id)}>
          STATUS 추가
        </button>
      ))}
    </div>
  );
};
export default ContextQ2Form2;
