import Cookies from "js-cookie";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { PATHS } from "../../../data/paths";
type TProps = {
  children: ReactNode;
};

export default function AuthRoute({ children }: TProps) {
  return Cookies.get("token") ? <Navigate to={PATHS.DASHBOARD} /> : children;
}
