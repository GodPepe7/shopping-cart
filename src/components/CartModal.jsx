import Close from "../assets/icons/close.svg";
import { useRef, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import BasketItem from "./BasketItem";
import PropTypes from "prop-types";

CartModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModalHandler: PropTypes.func.isRequired,
};

function CartModal({ modalIsOpen, closeModalHandler }) {
  const { basket, setBasket } = useOutletContext();
  const ref = useRef(null);

  useEffect(() => {
    if (modalIsOpen) {
      ref.current?.showModal();
    } else {
      setTimeout(() => {
        ref.current?.close();
      }, 150);
    }
  }, [modalIsOpen]);

  const deleteFromBasketHandler = (productId) => {
    setBasket((prev) => {
      const entryExisted = prev.delete(productId);
      return entryExisted ? new Map(prev) : prev;
    });
  };

  return (
    <dialog
      className={`min-h-screen min-w-[250px] w-[40%] max-w-[400px] backdrop:backdrop-blur px-4 py-4 ml-auto mr-0 ${
        modalIsOpen
          ? "animate-[slide-in_0.15s_linear]"
          : "animate-[slide-out_0.15s_linear]"
      }`}
      ref={ref}
      onCancel={closeModalHandler}
    >
      <button
        onClick={closeModalHandler}
        className="w-5 h-5"
        aria-label="Close"
      >
        <img src={Close} alt="Close Shopping Cart" />
      </button>
      <h2 className="text-center mb-4">Your Basket</h2>
      {basket.size > 0 ? (
        <div>
          {[...basket.entries()].map(
            ([productId, { title, coverImage, price, quantity }]) => (
              <BasketItem
                key={productId}
                title={title}
                coverImage={coverImage}
                price={price}
                quantity={quantity}
                onClick={() => deleteFromBasketHandler(productId)}
              ></BasketItem>
            )
          )}
          <div className=" text-xl my-2">
            <p>Total Price</p>
            <p>
              {[...basket.values()].reduce(
                (accumulator, { price, quantity }) =>
                  accumulator + quantity * price,
                0
              )}
              €
            </p>
          </div>
          <button className="py-1 w-full text-theme-white bg-theme-black shadow-md uppercase tracking-wider focus:outline-4 focus:outline-offset-2 focus:outline-blue-400">
            Checkout
          </button>
        </div>
      ) : (
        <p className="text-center italic font-extralight">
          Shopping Cart is empty
        </p>
      )}
    </dialog>
  );
}

export default CartModal;
