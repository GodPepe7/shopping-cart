import { useState } from "react";
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
    setBasket((prev) => {
      const id = +productId;
      if (prev.has(id)) {
        const value = prev.get(id);
        const map = new Map(
          prev.set(id, { ...value, quantity: value.quantity + quantity })
        );
        return map;
      } else {
        return new Map(
          prev.set(product.id, {
            title: product.title,
            coverImage: product.coverImage,
            quantity,
            price: product.price,
          })
        );
      }
    });

  return (
    (product && (
      <div className="min-h-screen bg-[#F5F5F5] text-theme-black">
        <div className="min-h-[20vh] bg-shop-banner bg-cover bg-center bg-no-repeat">
          <Header color="white"></Header>
        </div>
        <main className="max-w-[1280px] xl:mx-auto mx-5 mt-12 flex gap-8 flex-wrap justify-center sm:flex-nowrap">
          <div className="max-w-[350px] min-w-[250px]">
            <img
              src={product.coverImage.large}
              alt={`${product.title}'s Cover`}
              className="h-auto w-full"
            />
            <div className="mt-2">
              <h3 className="text-lg text-center md:text-left font-semibold">
                Genres
              </h3>
              <p>{product.genres.join(", ")}</p>
            </div>
          </div>
          <div className="min-w-[250px] text-center mx-5 sm:text-left">
            <h2 className=" text-5xl mb-8">{product.title}</h2>
            <div className="text-xl mb-4">{product.description}</div>
            <p className="font-semibold text-xl mb-4">{totalPrice}€</p>
            <div className="w-min mb-2 mx-auto">
              <QuantityInput
                quantity={quantity}
                onChange={onChange}
                increaseQuantityHandler={increaseQuantityHandler}
                decreaseQuantityHandler={decreaseQuantityHandler}
              ></QuantityInput>
              <div className="mt-1">
                <Button onClick={addToCart}>Add To Cart</Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    )) || <h2>Not found</h2>
  );
}

export default ProductPage;
