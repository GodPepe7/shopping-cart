function Card({ id, img, title }) {
  const price = 15.99;
  return (
    <div className="bg-white min-w-[225px] max-w-[300px] w-[275px] hover:bg-white/60 hover:scale-105 transition flex-auto px-3 py-3 drop-shadow-md">
      <img src={img} alt="" className="w-full h-[400px] object-cover" />
      <h3 className="line-clamp-2">{title}</h3>
      <p>${price}</p>
    </div>
  );
}

export default Card;
