import { useEffect } from "react";
import axios from "axios";

const ProductList = () => {

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/product/"
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <div>
        {quotes.map((quote, index) => (
        <p key={index}>{quote.q}</p>
      ))}
      </div>
    </div>
  );
};

export default ProductList;