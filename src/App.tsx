import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./page/HomePage";
import UserPage from "./page/UserPage";
import CreatePage from "./page/CreatePage";
import UpdatePage from "./page/UpdatePage";
import SearchPage from "./page/SearchPage";
import ChatRoomPage from "./page/ChatRoomPage";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/User",
      element: <UserPage />,
    },
    {
      path: "/Create",
      element: <CreatePage />,
    },
    {
      path: "/Update",
      element: <UpdatePage />,
    },
    {
      path: "/Search",
      element: <SearchPage />,
    },
    {
      path: "/ChatRoom",
      element: <ChatRoomPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
