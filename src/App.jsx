import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import BalancePage from "./pages/balance";
import GoalsPage from "./pages/goals";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <SignIn />,
    },
    {
      path: "/register",
      element: <SignUp />,
    },
    {
      path: "/forgotPassword",
      element: <ForgotPassword />,
    },
    {
      path: "/balance",
      element: <BalancePage />,
    },
    {
      path:"/goal",
      element:<GoalsPage/>,
    }
  ]);

  return <RouterProvider router={myRouter} />;
};

const Home = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-center">
    <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg animate-bounce">
      Selamat Datang!
    </h1>
    <p className="text-lg text-gray-200 mb-12 max-w-md">
      Selamat datang di platform kami! Silakan login atau daftar untuk melanjutkan.
    </p>
    <nav className="flex gap-6">
      <Link
        to="/login"
        className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-110 hover:bg-blue-500 hover:text-white"
      >
        Login
      </Link>
      <Link
        to="/register"
        className="bg-white text-green-600 font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-110 hover:bg-green-500 hover:text-white"
      >
        Register
      </Link>
    </nav>
  </div>
);


export default App;
