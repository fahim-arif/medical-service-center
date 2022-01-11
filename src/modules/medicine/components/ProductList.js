import React from "react";
import styles from "./productList.module.css";
import Link from 'next/link'
const ProductList = ({product}) => {
  return (
    <div className={styles.products_container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.img_container}>
            <Link href={`/shop/${product._id}`}>
              <a>

                <img src={product.image} alt='' className={styles.product_img} />
              </a>
            </Link>
          </div>
          <div className={styles.title}>
            <Link href={`/shop/${product._id}`}>
              <a>

                {product.name.length > 100
                  ? product.name.substring(0, 62) + "........"
                  : product.name}
              </a>
            </Link>
          </div>
          <div className={styles.price}>
            <span className={styles.money_sign}>৳</span>
            {product.price > 999.99 &&
              product.price < 9999.99 &&
              product.price.toString().substring(0, 1) +
              "," +
              product.price.toString().substring(1, 4)}

            {product.price > 9999.99 &&
              product.price < 99999.99 &&
              product.price.toString().substring(0, 2) +
              "," +
              product.price.toString().substring(2, 5)}

            {product.price > 99999.99 &&
              product.price < 999999.99 &&
              product.price.toString().substring(0, 1) +
              "," +
              product.price.toString().substring(1, 3) +
              "," +
              product.price.toString().substring(3, 6)}

            {product.price <= 999 && product.price}
            {/* {product.price} */}
          </div>
          <div className={styles.sub_title}>Free Shipping</div>
          <span className={styles.view_btn}>
            <Link href={`/shop/${product._id}`}>
              <a>

                VIEW DETAILS {">"}

              </a>
            </Link>

          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
