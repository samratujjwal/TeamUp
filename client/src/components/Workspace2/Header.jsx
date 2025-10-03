import { GiHamburgerMenu } from "react-icons/gi";
const Header = ({ onToggleSidebar, userDetails }) => {
  const { user } = userDetails;
  return (
    <header className="w-full bg-white shadow-md p-4 fixed top-0 left-0 md:ml-64 z-10">
      <button
        onClick={onToggleSidebar}
        className="md:hidden text-2xl font-bold text-blue-600 inline-block"
        aria-label="Open sidebar"
      >
        <GiHamburgerMenu />
      </button>

      <h1 className="text-xl font-semibold">
        <span className="text-blue-600 text-2xl font-bold ">
          {user.username}'s
        </span>{" "}
        Workspace
      </h1>
    </header>
  );
};

export default Header;
