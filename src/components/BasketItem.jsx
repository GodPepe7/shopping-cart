import Trash from "../assets/icons/trash.svg";

function BasketItem({ title, coverImage, quantity, price, onClick }) {
  return (
    <div className="grid grid-cols-[4fr_6fr] gap-2 py-3 border-b-[1px] border-theme-black">
      <img
        src={coverImage.large}
        alt="cover img"
        className="w-full aspect-square object-cover"
      />
      <div className="text-lg flex flex-col justify-center">
        <h3 className="line-clamp-1">{title}</h3>
        <p>Quantity: {quantity}</p>
        <p>Price: {price}€</p>
        <p>Sum: {quantity * price}€</p>
        <button className="w-[25px] h-[25px] ml-auto mr-0" onClick={onClick}>
          <img src={Trash} alt="Remove from basket" />
        </button>
      </div>
    </div>
  );
}

export default BasketItem;
