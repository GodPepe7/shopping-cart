import Header from "../components/Header";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function HomePage() {
  return (
    <div className="min-h-screen bg-home flex flex-col">
      <Header color="white" />
      <main className="text-theme-white max-w-[60ch] self-center my-60 text-center flex flex-col gap-5">
        <h2 className="text-5xl tracking-wider">Your Shop for Manga</h2>
        <p className="text-2xl tracking-wider">
          Discover Manga ranging from old classics to the newest, trending ones!
        </p>
        <Button>
          <Link to="/shop">Explore Now</Link>
        </Button>
      </main>
    </div>
  );
}

export default HomePage;
