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
      className={`sticky flex justify-between items-center p-10 text-2xl font-medium text-${themes[color]}`}
    >
      <div>
        <h1>
          Mangaya
          <br />
          マンガ店
        </h1>
      </div>
      <nav>
        <ul className="flex gap-20 list-none items-center">
          <li
            className={`hover:bg-${color}/60 bg-opacity-50 px-4 rounded-md hover:cursor-pointer`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`hover:bg-${color}/60 px-4 rounded-md hover:cursor-pointer`}
          >
            <Link to="shop/">Shop</Link>
          </li>
          <li
            className={`hover:bg-${color}/60 bg-opacity-25 px-4 rounded-md hover:cursor-pointer`}
          >
            <button
              className="border-none w-8 h-8"
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
