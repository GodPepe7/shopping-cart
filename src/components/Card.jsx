import { useNavigate } from "react-router-dom";

function Card({ id, img, title }) {
  const price = 15.99;
  const navigate = useNavigate();
  const handleClick = () => navigate(`${id}`);
  return (
    <div
      onClick={handleClick}
      className="bg-white min-w-[200px] max-w-[275px] w-[275px] hover:bg-white/60 hover:scale-105 hover:cursor-pointer transition flex-auto drop-shadow-md"
    >
      <img src={img} alt="" className="w-full h-[300px] object-cover" />
      <div className="px-3 py-3">
        <h3 className="line-clamp-2">{title}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
}

export default Card;
