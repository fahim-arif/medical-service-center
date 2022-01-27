import React, {useEffect, useState} from "react";
// import { useDispatch, useSelector } from "react-redux";
import {useRouter} from "next/router";
import styles from "../../../modules/ProductDetail/product-detail.module.css";
import ProductImage from "../../../modules/ProductDetail/ProductImage";
import ProductDescription from '../../../modules/ProductDetail/ProductDescription';
import ProductCart from '../../../modules/ProductDetail/ProductCart';



// import OverviewSection from "../../../modules/ProductDetail/OverviewSection";
import axios from "axios";
// import { getProduct } from "../actions/productActions";

// import Message from "../components/Message";
// import Loading from "../components/Loading";

const ProductDetailScreen = () => {
  const router = useRouter();
  const {id} = router.query;
  console.log(id)

  const [product, setProduct] = useState([]);

  // const dispatch = useDispatch();
  // const productDetails = useSelector((state) => state.productDetails);
  // const { loading, product, error } = productDetails;

  useEffect(() => {

    if (id) {

      const fetchData = async () => {

        const {data} = await axios.get(`http://localhost:5000/api/medicine/${id}`)
        setProduct(data)
      }
      fetchData();
    }
  }, [id]);
  return (
    // <Provider store={store}>
      <div className={styles.product_detail_container}>
        {/* {error && <Message>{error}</Message>}
      {loading && <Loading></Loading>} */}
        <div className={styles.row}>
          <ProductImage product={product}></ProductImage>
          <ProductDescription product={product}></ProductDescription>
          <ProductCart product={product}></ProductCart>
        </div>
        {/* <OverviewSection></OverviewSection> */}
      </div>
    // </Provider>
  );
};

export default ProductDetailScreen;
