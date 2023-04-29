import { createBrowserRouter } from "react-router-dom";
import FindPassword from "../pages/find";
import Login from "../pages/login";
import Main from "../pages/main";
import Account from "../pages/newAccount";
import Error from "../pages/error";

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
  {
    path: "/*",
    element: <Error />,
  },
]);

export default router;
