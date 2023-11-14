import { Link } from "react-router-dom";

function Card({ id, coverImage, title, price }) {
  return (
    <Link to={`/shop/${id}`}>
      <div className="flex-1 bg-white hover:bg-white/60 hover:scale-105 focus:scale-105 focus:bg-white/60 hover:cursor-pointer transition drop-shadow-md pointer-events-auto">
        <img
          src={coverImage.large}
          alt=""
          className="w-full min-h-[325px] max-h-[350px] object-cover"
        />
        <div className="px-3 py-3">
          <h3 className="line-clamp-1">{title}</h3>
          <p>{price}€</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
