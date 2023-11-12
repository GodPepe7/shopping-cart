import { useState, useEffect } from "react";

export const useProducts = (page) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const URL = "https://graphql.anilist.co";
  const query = `
    query($page: Int){
      Page(page: $page, perPage: 20) {
        media(type: MANGA, isAdult: false, sort: [POPULARITY_DESC, SCORE_DESC]) {
          id
          idMal
          description(asHtml: true)
          title {
            english
            romaji
          }
          genres
          coverImage {
            extraLarge
            large
          }
        }
      }
    }
    `;
  const variables = { page: page };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: query, variables: variables }),
        });
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        const data = await response.json();
        const flattened = data.data.Page.media.map((product) => {
          return {
            ...product,
            title: product.title.english
              ? product.title.english
              : product.title.romaji,
            price: 10.99,
          };
        });
        setProducts(flattened);
        setError(null);
      } catch (err) {
        setError(err.message);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return { products, error, loading };
};
