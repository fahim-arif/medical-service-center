import React, { useState, useEffect } from "react";
import axios from 'axios';
// import { useSelector, useDispatch } from "react-redux";

import styles from "./productScreen.module.css";
import ProductList from "./ProductList";
// import { getProducts } from "../actions/productActions";
import { Row, Col } from "react-bootstrap";

import Loading from "@root/common/components/elements/Loader";
import Message from "@root/common/components/elements/Message";

const ProductScreen = ({ medicineData}) => {
  const [hide, setHide] = useState(true);



  const dropDownHandler = () => {
    setHide(!hide);
  };
  return (
    <div className={styles.product_container}>
      <div
        onClick={dropDownHandler}
        className={`${styles.drop_down} ${
          hide ? "dropdown_hide" : "dropdown_show"
        }`}
      >
        {/* <DropDown></DropDown> */}
      </div>
      <div className={styles.side_bar}>
        <div className={styles.fiter_container}>
          <div className={styles.filter_option}>
            <div className={styles.option_name}>In Stock</div>

            <div class='custom-control custom-switch'>
              <input
                style={{ padding: "20px", height: "50px" }}
                value='OFF'
                type='checkbox'
                class='custom-control-input'
                id='customSwitch1'
              />
              <label class='custom-control-label' for='customSwitch1'></label>
            </div>
          </div>
          <div className={styles.filter_option}>
            <div className={styles.option_name}>On Sale</div>
            <div class='custom-control custom-switch'>
              <input
                style={{ padding: "20px", height: "50px" }}
                value='OFF'
                type='checkbox'
                class='custom-control-input'
                id='customSwitch2'
              />
              <label class='custom-control-label' for='customSwitch2'></label>
            </div>
          </div>
          <div className={styles.filter_option}>
            <div className={styles.option_name}>Sold By Verified Store</div>
            <div class='custom-control custom-switch'>
              <input
                style={{ padding: "20px", height: "50px" }}
                value='OFF'
                type='checkbox'
                class='custom-control-input'
                id='customSwitch3'
              />
              <label class='custom-control-label' for='customSwitch3'></label>
            </div>
          </div>
          <div className={styles.filter_option}>
            <div className={styles.option_name}>Free Shipping</div>
            <div class='custom-control custom-switch'>
              <input
                style={{ padding: "20px", height: "50px" }}
                value='OFF'
                type='checkbox'
                class='custom-control-input'
                id='customSwitch4'
              />
              <label class='custom-control-label' for='customSwitch4'></label>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.main_section}>
        <div className={styles.slider}>
          <img
            src='/images/Rectangle 35.png'
            alt=''
            className={styles.slider_img}
          />
        </div>
        <div className={styles.product_filter_container}>
          <div className={styles.left}>
            <div className={styles.search_container}>
              <div className={styles.text}>Search Product: </div>
              <input
                type='text'
                name='q'
                // onChange={quickSearchHanlder}
                className={styles.search}
              />
              {/* <button className={styles.src_btn}>Quick Search</button> */}
            </div>
            <div className={styles.sort_container}>
              <div className={styles.text}>Sort By: </div>
              <input
                type='text'
                className={styles.sort}
                placeholder='Featured Items'
              />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.page_list}>Page 1/3</div>
            <div className={styles.change_page_btn}>
              <button className={styles.prev_btn}>{"<"}</button>
              <button className={styles.next_btn}>{">"}</button>
            </div>
          </div>
        </div>
        <div className={styles.product_list}>
          {/* {loading && <Loading></Loading>} */}
          {/* {error && <Message type="error" className='error' message={error}></Message>} */}
          <Row>
            {medicineData.map((medicine) => (
              <Col key={medicine._id} sm={12} md={6} lg={4} xl={3}>
                <ProductList product={medicine}></ProductList>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
