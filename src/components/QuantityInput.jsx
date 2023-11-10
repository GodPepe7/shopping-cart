import Plus from "../assets/icons/plus.svg";
import Minus from "../assets/icons/minus.svg";

function QuantityInput({
  increaseQuantityHandler,
  decreaseQuantityHandler,
  quantity,
}) {
  return (
    <div className="flex justify-between">
      <button onClick={decreaseQuantityHandler}>
        <img src={Minus} alt="Decrease Quantity" />
      </button>
      <input
        type="number"
        min={1}
        max={10}
        value={quantity}
        className="text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      <button onClick={increaseQuantityHandler}>
        <img src={Plus} alt="Increase Quantity" />
      </button>
    </div>
  );
}

export default QuantityInput;
