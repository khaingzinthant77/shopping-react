import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../products";
import Container from "../components/Container";
import Rating from "../components/Rating";
import BreadCrumb from "../components/BreadCrumb";
const ProductDetail = () => {
  const { productId } = useParams();
  // console.log(productId);
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  return (
    <Container>
      <BreadCrumb current_page="Product" />
      <div className="border border-gray-200 p-10">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-2 sm:grid-cols-1">
          <div className="col-span-1">
            <img
              src={product.image}
              alt=""
              className="w-3/4 lg:w-1/2 mx-auto block"
            />
          </div>
          <div className="col-span-1 flex flex-col items-start gap-3">
            <h3 className="text-2xl font-bold">{product.title}</h3>
            <p className="bg-gray-200 px-3 text-sm text-gray-700 py-1 inline-block rounded">
              {product.category}
            </p>
            <p>{product.description}</p>
            <Rating rate={product.rating.rate} />
            <div className="flex justify-between w-full items-center">
              <p>Price ${product.price}</p>
              <Link
                to={"/"}
                className="border border-gray-200 px-2 text-nowrap py-1 rounded"
              >
                Add Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
