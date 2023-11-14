import Plus from "../assets/icons/plus.svg";
import Minus from "../assets/icons/minus.svg";

function QuantityInput({
  onChange,
  increaseQuantityHandler,
  decreaseQuantityHandler,
  quantity,
}) {
  return (
    <div className="grid grid-cols-3">
      <button onClick={decreaseQuantityHandler}>
        <img src={Minus} alt="Decrease Quantity" />
      </button>
      <input
        type="number"
        min={1}
        max={10}
        value={quantity}
        className="text-center text-xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-2 border-theme-black"
        onChange={onChange}
      />
      <button onClick={increaseQuantityHandler}>
        <img src={Plus} alt="Increase Quantity" />
      </button>
    </div>
  );
}

export default QuantityInput;
