import Cart from "../assets/icons/cart.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import CartModal from "./CartModal";

function Header({ color }) {
  const themes = {
    white: "theme-white",
    black: "theme-black",
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <header
      className={`sticky flex gap-4 sm:gap-0 justify-center sm:justify-between items-center p-10 text-2xl font-medium text-${themes[color]} flex-wrap`}
    >
      <div>
        <Link to="/">
          <h1 className="text-4xl">
            Mangaya
            <br />
            マンガ店
          </h1>
        </Link>
      </div>
      <nav>
        <ul className="flex gap-6 md:gap-12 2xl:gap-20 list-none items-center">
          <li
            className={`hover:bg-${color}/60 bg-opacity-50 rounded-md hover:cursor-pointer`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`hover:bg-${color}/60 rounded-md hover:cursor-pointer`}
          >
            <Link to="/shop">Shop</Link>
          </li>
          <li
            className={`hover:bg-${color}/60 bg-opacity-25 rounded-md hover:cursor-pointer`}
          >
            <button
              className="border-none w-8 h-8 flex align-middle"
              onClick={() => setModalIsOpen(true)}
            >
              <img className="" src={Cart} alt="Shopping Cart" />
            </button>
          </li>
        </ul>
        <div className="justify-self-end">
          <CartModal
            modalIsOpen={modalIsOpen}
            closeModalHandler={() => setModalIsOpen(false)}
          ></CartModal>
        </div>
      </nav>
    </header>
  );
}

export default Header;
