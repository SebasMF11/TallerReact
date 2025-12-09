import Login from "./pages/Login";
import Singin from "./pages/Singin";
import Home from "./pages/Home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/singin",
    element: <Singin />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

function App() {
  //funcion para direccionar???

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
