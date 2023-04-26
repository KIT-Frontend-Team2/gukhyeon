import { createBrowserRouter } from "react-router-dom";
import FindPassword from "../pages/find";
import Login from "../pages/login";
import Main from "../pages/main";
import Account from "../pages/newAccount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/main",
    element: <Main />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/find",
    element: <FindPassword />,
  },
]);

export default router;
