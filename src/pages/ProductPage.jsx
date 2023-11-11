import React from "react";
import Header from "../components/Header";
import QuantityInput from "../components/QuantityInput";
import Button from "../components/Button";
import { useOutletContext, useParams } from "react-router-dom";

function ProductPage() {
  const { products } = useOutletContext();
  const { productId } = useParams();
  const product = products.find((product) => product.id === +productId);
  console.log(product);
  return (
    (product && (
      <div className="min-h-screen bg-[#F5F5F5] text-theme-black">
        <div className="min-h-[20vh] bg-shop-banner bg-cover bg-center bg-no-repeat">
          <Header color="white"></Header>
        </div>
        <main className="max-w-[1280px] mx-auto mt-12 flex gap-8 flex-wrap justify-center sm:flex-nowrap">
          <div className="max-w-[350px] min-w-[250px]">
            <img
              src={product.coverImage.large}
              alt={`${product.title}'s Cover`}
              className="h-auto w-full"
            />
          </div>
          <div className="min-w-[250px]">
            <h2 className=" text-5xl mb-8">{product.title}</h2>
            <div className="text-xl mb-4">{product.description}</div>
            <p className="font-semibold text-xl mb-4">${product.price}</p>
            <div className="w-[150px] mb-2">
              <QuantityInput quantity={1}></QuantityInput>
              <Button>Add To Cart</Button>
            </div>
          </div>
        </main>
      </div>
    )) || <h2>Not found</h2>
  );
}

export default ProductPage;
