import Close from "../assets/icons/close.svg";
import { useRef, useEffect } from "react";

function CartModal({ modalIsOpen, closeModalHandler }) {
  const ref = useRef(null);
  useEffect(() => {
    if (modalIsOpen) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [modalIsOpen]);

  return (
    <dialog
      className="min-h-screen min-w-[250px] w-[20%] backdrop:backdrop-blur px-4 py-4 ml-auto mr-0"
      ref={ref}
      onCancel={closeModalHandler}
    >
      <button onClick={closeModalHandler} className="w-5 h-5">
        <img src={Close} alt="Close Shopping Cart" />
      </button>
      <div>
        <h2 className="text-center">Your Basket</h2>
      </div>
    </dialog>
  );
}

export default CartModal;
