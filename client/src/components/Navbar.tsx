import Link from "next/link";
import Axios from "axios";
import { Fragment } from "react";

import { useAuthState, useAuthDispatch } from "../context/auth";

const Navbar: React.FC = () => {
  const { authenticated } = useAuthState();
  const dispatch = useAuthDispatch();

  const logout = () => {
    Axios.get("/auth/logout")
      .then(() => {
        dispatch({ type: "LOGOUT" });
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="fixed inset-x-0 top-0 z-10 flex items-center justify-between w-full px-8 bg-transparent border-b h-8v border-primary">
      <img className="h-auto" src="/images/Logo.png" alt="logo" />
      <div className="flex items-center w-3/12 px-5 ml-10 border rounded-full bg-secondary font-body focus:bg-white hover:bg-white">
        <i className="mr-3 text-gray-400 fas fa-search"></i>
        <input
          type="text"
          placeholder="Search"
          className="w-full py-2 pr-3 transition duration-200 bg-transparent outline-none"
          // value={value}
          // onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-center">
        {authenticated ? (
          <button
            className="w-32 py-2 font-semibold text-white rounded-full outline-none focus:outline-none bg-green"
            onClick={logout}
          >
            Log out
          </button>
        ) : (
          <Fragment>
            <Link href="/login">
              <button className="w-32 py-2 mr-4 font-semibold rounded-full focus:outline-none text-green">
                Log in
              </button>
            </Link>
            <Link href="/register">
              <button className="w-32 py-2 font-semibold text-white rounded-full outline-none focus:outline-none bg-green">
                Sign up
              </button>
            </Link>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Navbar;
