import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar1({ user }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="sticky top-0 z-50 border-b border-neutral-300 bg-white">
      <nav className="mx-30 flex items-center justify-between p-4 bg-white">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              style={{ height: "2rem", width: "2rem", borderRadius: "0.5rem" }}
              src="/assets/logo1.png"
              alt="TeamUp Logo"
            />
          </Link>
          <Link to="/">
            <span className="ms-2 text-xl font-bold text-neutral-700">
              TeamUp
            </span>
          </Link>
        </div>

        {/* Links */}
        <div>
          <ul className="flex items-center space-x-10 font-semibold text-gray-600">
            <li className="hover:text-blue-500 transition">
              <Link to="/features">Features</Link>
            </li>
            <li className="hover:text-blue-500 transition">
              <Link to="/about">About</Link>
            </li>

            {/* If NOT logged in */}
            {!user ? (
              <>
                <li className="hover:text-blue-500 transition">
                  <Link to="/login">Login</Link>
                </li>
                <button className="px-3 py-1 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition">
                  <Link to="/signup">Sign Up</Link>
                </button>
              </>
            ) : (
              // If logged in
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <span className="font-medium text-gray-700">{user.name}</span>
                  <img
                    src={"/assets/profile.svg" || user.image}
                    alt="User Avatar"
                    className="h-8 w-8 rounded-full border border-gray-300"
                  />
                </button>

                {menuOpen && (
                  <div className="absolute right-0 mt-3 w-52 bg-white rounded-lg shadow-lg border border-gray-200 animate-fade-in">
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
                        <Link
                          to="/logout"
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        >
                          Logout
                        </Link>
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

export default Navbar1;
