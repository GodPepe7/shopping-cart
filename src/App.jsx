import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useProducts } from "./hooks/useProducts";

function App() {
  const [page, setPage] = useState(1);
  const [basket, setBasket] = useState(new Map());
  const { products, error, loading } = useProducts(page);

  return (
    <>
      <Outlet
        context={{
          page,
          setPage,
          basket,
          setBasket,
          products,
          error,
          loading,
        }}
      ></Outlet>
    </>
  );
}

export default App;
