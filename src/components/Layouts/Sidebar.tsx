import { NavLink } from "react-router-dom";
import { SIDEBAR_LINKS } from "../../data/menus/sidebar-links";

export default function Sidebar() {
  return (
    <div>
      {" "}
      <div className="drawer">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className=" p-4 w-80 min-h-full bg-[#121218]">
            <div>
              <h1 className="text-[#137DDE] font-bold text-xl text-center p-10">
                DASHBOARD
              </h1>
            </div>
            <ul>
              {SIDEBAR_LINKS.map((item, idx) => (
                <li key={idx} className="mt-2">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-white p-4 w-full flex items-center rounded-lg gap-3 hover:bg-[#2C2C37] ${
                        isActive ? "bg-[#2C2C37]" : " "
                      }`
                    }
                  >
                    {item.icon} {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
