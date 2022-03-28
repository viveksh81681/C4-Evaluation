import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar mt-4 py-2">
      <Link
        className=" px-1 m-1 rounded  border-2 border-blue-500 hover:bg-white hover:text-blue-500 text-white bg-blue-500  navbarHome"
        to={"/"}
      >
        Home
      </Link>
      <Link
        className=" px-1 m-1 rounded  border-2 border-blue-500 hover:bg-white hover:text-blue-500 text-white bg-blue-500  navbarLoginSignUp"
        to={"/loginsignup"}
      >
        Login/Sign Up
      </Link>
      <Link
        className=" px-1 m-1 rounded  border-2 border-blue-500 hover:bg-white hover:text-blue-500 text-white bg-blue-500  navbarLoginSignUp"
        to={"/event"}
      >
        Event
      </Link>
      <Link
        className=" px-1 m-1 rounded  border-2 border-blue-500 hover:bg-white hover:text-blue-500 text-white bg-blue-500  navbarLoginSignUp"
        to={"/addmeetup"}
      >
        AddMeetup
      </Link>
    </div>
  );
};