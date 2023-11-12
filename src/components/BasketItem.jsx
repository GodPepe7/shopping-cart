function BasketItem({ title, coverImage, quantity, price }) {
  return (
    <div className="grid grid-cols-[4fr_6fr] gap-2 py-3 border-b-[1px] border-theme-black">
      <img
        src={coverImage.large}
        alt="cover img"
        className="w-full aspect-square object-cover"
      />
      <div className="text-lg">
        <h3 className="line-clamp-2">{title}</h3>
        <p>Quantity: {quantity}</p>
        <p>Price: {price}€</p>
        <p>Sum: {quantity * price}€</p>
      </div>
    </div>
  );
}

export default BasketItem;
