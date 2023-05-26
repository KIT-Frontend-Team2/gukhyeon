import {
  RESET_USER_LIST,
  useUserContext,
} from "../../../../../store/3_context";

const ContextQ2Form3 = () => {
  const { dispatch } = useUserContext();

  const handleReset = () => {
    dispatch(RESET_USER_LIST());
  };
  return (
    <div>
      <h1>Q2Form3</h1>
      <button onClick={handleReset}>RESET</button>
    </div>
  );
};
export default ContextQ2Form3;
