import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./adapters/router";
import ModalProvider from "./store/2_context";
import UserContextProvider from "./store/3_context";

function App() {
  return (
    <>
      <UserContextProvider>
        <ModalProvider>
          <RouterProvider router={router} />
        </ModalProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
