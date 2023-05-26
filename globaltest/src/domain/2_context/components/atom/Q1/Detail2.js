import { useModalStore } from "../../../../../store/2_context";

const ContextQ1Detail2 = () => {
  const { isModalOpen, toggleModalOpen } = useModalStore();
  return (
    <>
      <h2>ContextQ1Detail2</h2>
      <button onClick={toggleModalOpen}>
        {isModalOpen ? "숨기기" : "보이기"}
      </button>
    </>
  );
};
export default ContextQ1Detail2;
