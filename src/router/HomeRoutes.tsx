import { Home } from "../components/pages/Home";
import { UserManagement } from "../components/pages/UserManagement";
import { Settings } from "../components/pages/Settings";
import { Page404 } from "../components/pages/Page404";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/user_management",
    exact: false,
    children: <UserManagement />
  },
  {
    path: "/setting",
    exact: false,
    children: <Settings />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
];
