import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function HomePage() {
  const navigate = useNavigate();
  const goToShoppingPageHandler = () => {
    navigate("/shop");
  };
  return (
    <div className="min-h-screen bg-home flex flex-col">
      <Header color="white" />
      <main className="text-theme-white max-w-[60ch] mx-4 self-center my-60 text-center flex flex-col gap-5">
        <h2 className="text-5xl tracking-wider">Your Shop for Manga</h2>
        <p className="text-2xl tracking-wider">
          Discover Manga ranging from old classics to the newest, trending ones!
        </p>

        <Button onClick={goToShoppingPageHandler}>Explore Now</Button>
      </main>
    </div>
  );
}

export default HomePage;
