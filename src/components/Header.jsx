import Cart from "../assets/icons/cart.svg";

function Header({ styles }) {
  return (
    <header
      className={`flex justify-between items-center p-10 text-2xl font-medium ${styles}`}
    >
      <div>
        <h1>
          Mangaya
          <br />
          マンガ店
        </h1>
      </div>
      <nav>
        <ul className="flex gap-20 list-none">
          <li>Home</li>
          <li>Shop</li>
          <li>
            <button className="border-none">
              <img className="w-8 h-8" src={Cart} alt="Shopping Cart" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
