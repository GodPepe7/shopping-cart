import Plus from "../assets/icons/plus.svg";
import Minus from "../assets/icons/plus.svg";

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
      <input type="number" min={1} max={10} value={quantity} />
      <button onClick={increaseQuantityHandler}>
        <img src={Plus} alt="Increase Quantity" />
      </button>
    </div>
  );
}

export default QuantityInput;
