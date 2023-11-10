import Header from "../components/Header";
import Card from "../components/Card";

function ShoppingPage() {
  const mangaList = [
    {
      id: 106758,
      title: "The Eminence in Shadow",
      img: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx106758-jtXpQYQqyNJv.jpg",
    },
    {
      id: 33008,
      title: "JoJo's Bizarre Adventure Part 5: Golden Wind",
      img: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/nx33008-HBnMTIGwREaV.png",
    },
    {
      id: 30042,
      title: "Dragon Ball",
      img: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx30042-4SetGiEbGc9x.jpg",
    },
    {
      id: 1,
      title: "The Eminence in Shadow",
      img: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx106758-jtXpQYQqyNJv.jpg",
    },
    {
      id: 2,
      title: "JoJo's Bizarre Adventure Part 5: Golden Wind",
      img: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/nx33008-HBnMTIGwREaV.png",
    },
    {
      id: 3,
      title: "Dragon Ball",
      img: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx30042-4SetGiEbGc9x.jpg",
    },
    {
      id: 4,
      title: "The Eminence in Shadow",
      img: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx106758-jtXpQYQqyNJv.jpg",
    },
    {
      id: 5,
      title: "JoJo's Bizarre Adventure Part 5: Golden Wind",
      img: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/nx33008-HBnMTIGwREaV.png",
    },
    {
      id: 6,
      title: "Dragon Ball",
      img: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx30042-4SetGiEbGc9x.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="min-h-[20vh] bg-shop-banner bg-cover bg-center bg-no-repeat">
        <Header color="white"></Header>
      </div>
      <div className=" mt-8 mx-auto max-w-screen-2xl w-[90%]">
        <h2 className="text-3xl mb-8">Manga Collection</h2>
        <div className="flex flex-wrap gap-10">
          {mangaList.map((manga) => (
            <Card key={manga.id} {...manga}></Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShoppingPage;
