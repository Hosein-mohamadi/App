import { ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

type Props = {
  children: ReactNode;
};

export default function PanelLayout({ children }: Props) {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="p-9"> {children}</div>
    </div>
  );
}
