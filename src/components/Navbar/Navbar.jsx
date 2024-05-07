import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navList = (
    <ul className="flex space-x-20 text-orange-200 font-semibold text-2xl">
      <li>
        <Link
          to={"/"}
          className="hover:text-gray-100 transition-colors duration-200"
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          to={"/book"}
          className="hover:text-gray-100 transition-colors duration-200"
        >
          Book Hunt
        </Link>
      </li>

    </ul>
  );

  return (
    <nav className="bg-sky-500 sticky top-0">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center py-2">
        <div>{navList}</div>
        <div className="flex items-center space-x-8 text-2xl">

          <Link to={"/login"} className="text-orange-200 hover:text-gray-100">
            <FontAwesomeIcon icon={faUser} />
          </Link>

          {/* <Link to={"/cart"} className="text-orange-200 hover:text-gray-100 ">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link> */}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
