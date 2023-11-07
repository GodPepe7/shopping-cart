import Header from "../components/Header";

function HomePage() {
  return (
    <div className="min-h-screen bg-home flex flex-col">
      <Header styles="text-theme-white absolute" />
      <div className="text-theme-white max-w-[60ch] self-center my-60 text-center flex flex-col gap-5">
        <h2 className="text-5xl tracking-wider">Your Shop for Manga</h2>
        <p className="text-2xl tracking-wider">
          Discover Manga ranging from old classics to the newest, trending ones!
        </p>
        <button className="px-12 py-2 w-max self-center text-theme-white bg-theme-black shadow-md uppercase tracking-wider shadow-theme-white/50 transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-2">
          Explore Now
        </button>
      </div>
    </div>
  );
}

export default HomePage;
