import {
  Navigate,
  Outlet,
  RouteObject,
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import PanelLayout from "../components/Layouts/PanelLayout";
import AuthRoute from "../components/common/AuthRoute/AuthRoute";
import PrivateRoute from "../components/common/PrivateRoute/PrivateRoute";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/auth/LoginPage";
import { PATHS } from "./paths";

export const ROUTES: RouteObject[] = [
  {
    element: <App />,
    children: [
      {
        element: (
          <PanelLayout>
            <PrivateRoute>
              <Outlet />
            </PrivateRoute>
          </PanelLayout>
        ),
        children: [
          {
            element: <Dashboard />,
            path: PATHS.DASHBOARD,
          },
          {
            element: <Navigate to={"/"} />,
            path: "/*",
          },
        ],
      },
    ],
  },
  {
    element: (
      <AuthRoute>
        <Outlet />
      </AuthRoute>
    ),
    children: [
      {
        element: <LoginPage />,
        path: PATHS.AUTH.LOGIN,
      },
    ],
  },
];

export const appRouter = createBrowserRouter(ROUTES);
