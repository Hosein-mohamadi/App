import { ReactNode } from "react";

import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { PATHS } from "../../../data/paths";

export default function PrivateRoute({ children }: { children: ReactNode }) {
  return !Cookies.get("token") ? (
    <Navigate to={PATHS.AUTH.LOGIN} />
  ) : (
    <div>{children}</div>
  );
}
