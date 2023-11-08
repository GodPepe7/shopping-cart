function BasketItem({ img, title, quantity, price }) {
  return (
    <div className="grid grid-cols-2">
      <img src={img} alt="" className="w-full h-auto object-cover" />
      <div>
        <h3>{title}</h3>
        <p>{price * quantity}</p>
      </div>
    </div>
  );
}

export default BasketItem;
