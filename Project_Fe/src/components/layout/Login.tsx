import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("");
  };
  return (
    <>
      <div className="bg-gray-50 text-customDarkGray">
        <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
          <div className="max-w-md w-full border py-8 px-6 rounded border-gray-300 bg-white">
            <h2 className="text-center text-3xl font-extrabold">
              Log in to your account
            </h2>
            <form className="mt-10 space-y-4">
              <div>
                <input
                  type="text"
                  required
                  className="w-full text-sm px-4 py-3 rounded outline-none border-2 focus:border-customYellow"
                  placeholder="Username"
                />
              </div>
              <div>
                <input
                  type="password"
                  required
                  className="w-full text-sm px-4 py-3 rounded outline-none border-2 focus:border-customYellow"
                  placeholder="Password"
                />
              </div>
              <div>
                <input
                  type="text"
                  required
                  className="w-full text-sm px-4 py-3 rounded outline-none border-2 focus:border-customYellow"
                  placeholder="Type"
                />
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label className="ml-3 block text-sm">Remember me</label>
                </div>
                <div>
                  <a
                    href="jajvascript:void(0);"
                    className="text-sm text-blue-600 hover:text-blue-500"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div className="!mt-10">
                <button
                  onClick={handleLogin}
                  type="button"
                  className="w-full py-2.5 px-4 text-xl font-sans rounded text-customDark2 bg-customYellow hover:bg-blue-400 focus:outline-none"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
