import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import UserDetailsPage from "./pages/userDetailsPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserListPage />,
    },
    {
      path: "/userdetails/:id",
      element: <UserDetailsPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
