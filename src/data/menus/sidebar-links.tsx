import { PATHS } from "../paths";

export type TSideBar_Links = {
  name: string;
  path: string;
  icon: JSX.Element;
};

export const SIDEBAR_LINKS: TSideBar_Links[] = [
  {
    name: "Dashboard",
    path: PATHS.DASHBOARD,
    icon: <span className="material-icons">dashboard</span>,
  },
  {
    name: "Profile",
    path: PATHS.PROFILE,
    icon: <span className="material-icons-outlined">person_outline</span>,
  },
];
