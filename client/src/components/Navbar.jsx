import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

function Navbar() {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Verify cookie on mount
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        setUser(null);
        return;
      }
      try {
        const { data } = await axios.post(
          "http://localhost:9090",
          {},
          { withCredentials: true }
        );
        if (data.status) {
          setUser({
            name: data.username,
            email: data.email,
            image: "/assets/profile.svg" || data.image,
          });
        } else {
          setUser(null);
          removeCookie("token");
          navigate("/login");
        }
      } catch (err) {
        console.error(err);
        setUser(null);
        removeCookie("token");
        navigate("/login");
      }
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Logout
  const handleLogout = () => {
    removeCookie("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="sticky top-0 z-50 border-b border-neutral-300 bg-white">
      <nav className="mx-30 flex items-center justify-between p-4 bg-white">
        <div className="flex">
          <Link to="/">
            <img
              style={{ height: "2rem", width: "2rem", borderRadius: "0.5rem" }}
              src="/assets/logo1.png"
              alt=""
            />
          </Link>
          <Link to="/">
            <span className="ms-2 text-xl font-bold text-neutral-700">
              TeamUp
            </span>
          </Link>
        </div>
        {!user ? (
          <></>
        ) : (
          <div className="flex">
            <Link to={"/workspace"}>
              <button className="px-2 py-1 bg-blue-500 text-white rounded-lg">
                Go to Your WorkSpace
              </button>
            </Link>
          </div>
        )}
        <div>
          <ul className="flex md:flex space-x-10 font-semibold text-gray-600 items-center">
            <li className="hover:text-blue-400 cursor-pointer">
              <Link to="/features">Features</Link>
            </li>
            <li className="hover:text-blue-400 cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            {!user ? (
              <>
                <li className="hover:text-blue-400 cursor-pointer">
                  <Link to={"/login"}>Login</Link>
                </li>
                <button className="px-2 py-1 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300">
                  <Link to="/signup">Sign Up</Link>
                </button>
              </>
            ) : (
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <span className="font-medium text-gray-700">{user.name}</span>
                  <img
                    src={user.image}
                    alt="User Avatar"
                    className="h-8 w-8 rounded-full border border-gray-300"
                  />
                </button>

                {menuOpen && (
                  <div className="absolute right-0 mt-3 w-52 bg-white rounded-lg shadow-lg border border-gray-200">
                    <div className="px-4 py-3 border-b">
                      <p className="font-semibold text-gray-800">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                    <ul className="py-2">
                      <li>
                        <Link
                          to="/account"
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        >
                          Account Settings
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-red-600"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
