import Header from "../components/Header";
import Card from "../components/Card";
import { useOutletContext } from "react-router-dom";
import React, { useEffect } from "react";

function ShoppingPage() {
  const { products, error, loading, page, setPage } = useOutletContext();
  const nextHandler = () => {
    setPage((prev) => prev + 1);
  };
  const prevHandler = () => {
    setPage((prev) => {
      return prev > 1 ? prev - 1 : 1;
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="min-h-[20vh] bg-shop-banner bg-cover bg-center bg-no-repeat">
        <Header color="white"></Header>
      </div>
      <div className=" mt-8 2xl:mx-auto mx-5 max-w-screen-2xl ">
        <h2 className="text-3xl mb-8 text-center xl:text-left">
          Manga Collection
        </h2>
        <div className="grid grid-cols-fluid gap-8">
          {loading && <h2>{loading}</h2>}
          {error && <h2>{error}</h2>}
          {products?.length > 0 &&
            products.map((product) => (
              <Card key={product.id} {...product}></Card>
            ))}
        </div>
        <div className="flex justify-between align-middle my-5 text-2xl">
          <button onClick={prevHandler}>&#8592; Previous</button>
          <button onClick={nextHandler}>Next &#8594;</button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingPage;
