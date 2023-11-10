import React from "react";
import Header from "../components/Header";
import QuantityInput from "../components/QuantityInput";
import Button from "../components/Button";

function ProductPage() {
  const product = {
    id: 106758,
    title: "The Eminence in Shadow",
    img: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx106758-jtXpQYQqyNJv.jpg",
    price: 15.99,
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-theme-black">
      <div className="min-h-[20vh] bg-shop-banner bg-cover bg-center bg-no-repeat">
        <Header color="white"></Header>
      </div>
      <main className="max-w-[1280px] mx-auto mt-12 flex gap-8 flex-wrap">
        <div className="max-w-[350px] min-w-[250px]">
          <img
            src={product.img}
            alt={`${product.title}'s Cover`}
            className="h-auto w-full"
          />
        </div>
        <div className="max-w-[700px]">
          <h2 className=" text-5xl mb-8">{product.title}</h2>
          <p className="text-xl mb-4">
            One big fat lie and a few twisted truths. Even in his past life,
            Cid's dream wasn't to become a protagonist or a final boss. He'd
            rather lie low as a minor character until it's prime time to reveal
            he's a mastermind...or at least, do the next best thing-pretend to
            be one! And now that he's been reborn into another world, he's ready
            to set the perfect conditions to live out his dreams to the fullest.
            Armed with his overactive imagination, Cid jokingly recruits members
            to his organization and makes up a whole backstory about an evil
            cult that they need to take down. Well, as luck would have it, these
            imaginary adversaries turn out to be the real deal-and everyone
            knows the truth but him!
          </p>
          <p className="font-semibold text-xl mb-4">${product.price}</p>
          <div className="w-[150px] mb-2">
            <QuantityInput quantity={1}></QuantityInput>
            <Button>Add To Cart</Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductPage;
