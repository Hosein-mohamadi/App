import { useNavigate } from "react-router-dom";
import { PATHS } from "../../data/paths";
import { useUser } from "../../stores/useUser";

export default function Navbar() {
  const { logout } = useUser();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logout();
    navigate(PATHS.AUTH.LOGIN);
  };
  return (
    <div>
      <div className="navbar bg-base-100 shadow">
        <div className="flex-none">
          <button className=" drawer-content my-drawer-2 drawer-button">
            <label htmlFor="my-drawer-2" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Dashboard</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost" onClick={handleLogOut}>
            <span className="material-icons text-2xl">logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
