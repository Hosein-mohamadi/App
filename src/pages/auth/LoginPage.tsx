import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PATHS } from "../../data/paths";
import { useUser } from "../../stores/useUser";
type Inputs = {
  username: string;
  password: string;
};
export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { login } = useUser();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await login(data);
    navigate(PATHS.DASHBOARD);
    toast.success("welcome " + data.username);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-tr to-[#E739F5] from-[#61D9DE]">
      <div className="max-w-xs sm:max-w-lg bg-white shadow-lg w-full py-20 rounded px-10">
        <h2 className="font-bold text-2xl text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
          <div>
            <label htmlFor="username" className="text-neutral-950 ">
              Username
            </label>
            <div className="w-full flex items-center mt-2 gap-2 border-b border-neutral-300 py-3">
              <span className="material-icons text-neutral-500">
                perm_identity
              </span>
              <input
                type="text"
                {...register("username", { required: true })}
                placeholder="Type your username"
                className="outline-none flex-1"
              />
            </div>
            {errors.username && (
              <span className="py-2 text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
          <div className="mt-3">
            <label htmlFor="username" className="text-neutral-950 ">
              Password
            </label>
            <div className="w-full flex items-center mt-2 gap-2 border-b border-neutral-300 py-3">
              <span className="material-icons-outlined text-neutral-500">
                lock
              </span>
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="Type your Password"
                className="outline-none flex-1"
              />
            </div>
            {errors.password && (
              <span className="py-2 text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
          <div className="mt-1 text-right">
            <Link
              to={PATHS.AUTH.FORGOT_PASSWORD}
              className="text-sm text-neutral-800"
            >
              Forgot password?
            </Link>
          </div>
          <div className="w-full flex justify-center mt-5">
            <button
              type="submit"
              className="p-3 text-white font-medium w-full md:w-11/12 rounded-badge bg-gradient-to-tr to-[#E739F5] from-[#61D9DE]"
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
