import React, {useState, useEffect} from "react";
import axios from 'axios';
import {useRouter} from 'next/router'
// import { useSelector, useDispatch } from "react-redux";

import styles from "./productScreen.module.css";
import ProductList from "./ProductList";
// import { getProducts } from "../actions/productActions";
import {Row, Col} from "react-bootstrap";

import Loading from "@root/common/components/elements/Loader";
import Message from "@root/common/components/elements/Message";

const ProductScreen = ({medicineData}) => {
  const [image, setImage] = useState('')
  const router = useRouter()
  const {id} = router.query;
  const [hide, setHide] = useState(true);

  // const img = medicineData.find((data) => data.id === id);
  // console.log(img)
  useEffect(() => {

    if (id) {

      const fetchStoreData = async () => {
        const {data} = await axios.get(`http://localhost:5000/api/store/${id}`)
        if (data.locationImage)
          setImage(data.locationImage)
      }
      fetchStoreData()
    }
  }, [id])

  console.log(medicineData)
  const dropDownHandler = () => {
    setHide(!hide);
  };
  return (
    <div className={styles.product_container}>
      <div
        onClick={dropDownHandler}
        className={`${styles.drop_down} ${hide ? "dropdown_hide" : "dropdown_show"
          }`}
      >
        {/* <DropDown></DropDown> */}
      </div>
      <div className={styles.side_bar}>
        <div className={styles.fiter_container}>
          <div className={styles.filter_option}>
            <div className={styles.option_name}>In Stock</div>

            <div className='custom-control custom-switch'>
              <input
                style={{padding: "20px", height: "50px"}}
                value='OFF'
                type='checkbox'
                className='custom-control-input'
                id='customSwitch1'
              />
              <label className='custom-control-label' htmlFor='customSwitch1'></label>
            </div>
          </div>
          <div className={styles.filter_option}>
            <div className={styles.option_name}>On Sale</div>
            <div className='custom-control custom-switch'>
              <input
                style={{padding: "20px", height: "50px"}}
                value='OFF'
                type='checkbox'
                className='custom-control-input'
                id='customSwitch2'
              />
              <label className='custom-control-label' htmlFor='customSwitch2'></label>
            </div>
          </div>
          <div className={styles.filter_option}>
            <div className={styles.option_name}>Sold By Verified Store</div>
            <div className='custom-control custom-switch'>
              <input
                style={{padding: "20px", height: "50px"}}
                value='OFF'
                type='checkbox'
                className='custom-control-input'
                id='customSwitch3'
              />
              <label className='custom-control-label' htmlFor='customSwitch3'></label>
            </div>
          </div>
          <div className={styles.filter_option}>
            <div className={styles.option_name}>Free Shipping</div>
            <div className='custom-control custom-switch'>
              <input
                style={{padding: "20px", height: "50px"}}
                value='OFF'
                type='checkbox'
                className='custom-control-input'
                id='customSwitch4'
              />
              <label className='custom-control-label' htmlFor='customSwitch4'></label>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.main_section}>
        <div className={styles.slider}>
          <img
            src={image}
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
