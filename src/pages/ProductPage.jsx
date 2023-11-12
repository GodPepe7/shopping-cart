import React, { useState } from "react";
import Header from "../components/Header";
import QuantityInput from "../components/QuantityInput";
import Button from "../components/Button";
import { useOutletContext, useParams } from "react-router-dom";

function ProductPage() {
  const { products, setBasket } = useOutletContext();
  const { productId } = useParams();
  const product = products.find((product) => product.id === +productId);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantityHandler = () =>
    setQuantity((prev) => {
      if (prev < 99) return prev + 1;
      return 99;
    });

  const decreaseQuantityHandler = () =>
    setQuantity((prev) => {
      if (prev > 1) return prev - 1;
      return 1;
    });

  const onChange = (e) => {
    const value = +e.target.value;
    if (value >= 1 && value <= 99) setQuantity(value);
  };

  const totalPrice = product.price * quantity;

  const addToCart = () =>
    setBasket(
      (prev) =>
        new Map(
          prev.set(product.id, {
            title: product.title,
            coverImage: product.coverImage,
            quantity,
            price: product.price,
          })
        )
    );

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
            <p className="font-semibold text-xl mb-4">{totalPrice}€</p>
            <div className="w-[150px] mb-2">
              <QuantityInput
                quantity={quantity}
                onChange={onChange}
                increaseQuantityHandler={increaseQuantityHandler}
                decreaseQuantityHandler={decreaseQuantityHandler}
              ></QuantityInput>
              <Button onClick={addToCart}>Add To Cart</Button>
            </div>
          </div>
        </main>
      </div>
    )) || <h2>Not found</h2>
  );
}

export default ProductPage;
