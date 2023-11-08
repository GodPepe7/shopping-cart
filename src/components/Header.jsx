import Cart from "../assets/icons/cart.svg";

  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <header
      className={`sticky flex justify-between items-center p-10 text-2xl font-medium ${styles}`}
    >
      <div>
        <h1>
          Mangaya
          <br />
          マンガ店
        </h1>
      </div>
      <nav>
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
