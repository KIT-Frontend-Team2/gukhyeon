import { createContext, useContext, useReducer } from "react";

const initialState = {
  userList: [],
  editedUserList: [],
};

export const createAction = (type) => {
  return (payload) => {
    return { type, payload };
  };
};

export const ADD_USER = createAction("ADD_USER");
export const ADD_EDIT = createAction("ADD_EDIT");
export const RESET_USER_LIST = createAction("RESET_USER_LIST");

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        userList: [...state.userList, action.payload],
      };
    case ADD_EDIT:
      return {
        ...state,
        editedUserList: state.userList.map((user) =>
          user.id === action.payload ? { ...user, isEdit: true } : user
        ),
      };
    case RESET_USER_LIST:
      return {
        ...state,
        userList: [],
        editedUserList: [],
      };
    default:
      return state;
  }
};

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

function UserContextProvider({ children }) {
  const [userList, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ userList, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
