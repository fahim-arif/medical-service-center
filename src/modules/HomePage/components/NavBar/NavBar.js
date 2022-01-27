import {useState} from "react";
import {Flex, Text, Box} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import {useSelector, useDispatch} from "react-redux";
import logo from "/public/images/logo_new.png";
import profilePic from "/public/images/profile-pic.png";
import styles from "../../../../../styles/header.module.css";
import {
  MenuOutlined,
  Search,
  PersonOutline,
  ShoppingCartOutlined,
  ArrowDropDown,
} from "@material-ui/icons";
const NavBar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    window.location.reload()
  };
  const cart = useSelector((state) => state.cart);
  const {cartItems} = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const {userInfo} = userLogin;

  const [dropDown, setDropDown] = useState(false);

  const onMouseEnter = () => {
    setDropDown(true);
  };
  const onMouseLeave = () => {
    setDropDown(false);
  };
  return (
    <Box height="70px" width="100%">
      <Flex
        height="70px"
        width="100%"
        justifyContent="space-around"
        alignItems="center"
      >
        <Box height="48px" width="188px">
          <Link href='/'>
            <a>

              <Image src={logo} layout="responsive" />
            </a>
          </Link>
        </Box>
        <Flex width="1100px" justifyContent="right" alignItems="center">
          <Box marginLeft="20px">
            <Link href="/">
              <Text
                cursor="pointer"
                fontSize="14px"
                fontWeight="500"
                fontFamily="Asap"
              >
                Home
              </Text>
            </Link>
          </Box>
          <Box marginLeft="20px">
            <Link href="questionAnswer">
              <Text
                cursor="pointer"
                fontSize="14px"
                fontWeight="500"
                fontFamily="Asap"
              >
                Q/A
              </Text>
            </Link>
          </Box>
          {/* <Box marginLeft="20px">
            <Link href="#">
              <Text
                cursor="pointer"
                fontSize="14px"
                fontWeight="500"
                fontFamily="Asap"
              >
                Medical Store
              </Text>
            </Link>
          </Box> */}
          <Box marginLeft="20px">
            <Link href="#">
              <Text
                cursor="pointer"
                fontSize="14px"
                fontWeight="500"
                fontFamily="Asap"
              >
                Emergency Service
              </Text>
            </Link>
          </Box>
          <Box marginLeft="20px">
            <Link href="/about">
              <Text
                cursor="pointer"
                fontSize="14px"
                fontWeight="500"
                fontFamily="Asap"
              >
                About Us
              </Text>
            </Link>
          </Box>
          <Flex marginLeft="20px" justifyContent="center" alignItems="center">
            {/* <Box height="30px" width="36px">
              <Image src={profilePic} layout="responsive" />
            </Box> */}
            {/* Edit here */}
            <div className={styles.header_right}>
              <div className={styles.header_icon_account}>
                {userInfo ? (
                  <Link
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    className={styles.account_link}
                    href='/profile'
                  >
                    <a style={{display: 'flex'}}>
                      <Flex>
                        <i
                          style={{fontSize: "32px", paddingRight: "12px"}}
                          className='fas fa-user-circle big'
                        ></i>
                        <div className={styles.account}>
                          <div className={styles.welcome}>Welcome</div>
                          <div className={styles.content}>
                            {userInfo ? userInfo.username : "user"}
                            <ArrowDropDown></ArrowDropDown>
                          </div>
                        </div>
                      </Flex>
                    </a>
                  </Link>
                ) : (
                  <Link
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    className={styles.account_link}
                    href='/login'
                  >
                    <a>

                      <i
                        style={{fontSize: "32px", paddingRight: "12px"}}
                        className='fas fa-user-circle big'
                      ></i>
                      <div className={styles.account}>
                        <div className={styles.welcome}>Welcome</div>
                        <div className={styles.content}>
                          {userInfo ? userInfo.username : "user"}
                          <ArrowDropDown></ArrowDropDown>
                        </div>
                      </div>
                    </a>
                  </Link>
                )}

                <div
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  className={`${styles.account_collaspe_container} ${!dropDown ? styles.close : ""
                    } ${!userInfo && styles.hide}`}
                >
                  <ul
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    className={styles.collaspe_menu}
                  >
                    <Link href='/profile' className='flex-space'>
                      <a>

                        <li className={styles.menu_item}>My Account</li>
                      </a>
                    </Link>
                    <Link href='/profile/orders'><a className='flex-space'>

                      <li className={styles.menu_item}>Order History</li>
                    </a>
                    </Link>
                    <Link href='/profile/track-order'><a className='flex-space'>

                      <li className={styles.menu_item}>Track Order</li>
                    </a>
                    </Link>
                    <Link href='#'>
                      <a>

                        <li onClick={handleLogout} className={styles.menu_item}>
                          Logout
                        </li>
                      </a>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className={styles.header_icon_content}>
                <Link href='/cart'>
                  <a>

                    <ShoppingCartOutlined class={styles.header_icons} />
                  </a>
                </Link>
                <Link className={styles.cart_link} href='/cart'>
                  <a>

                    Cart{" "}
                    <span
                      className={`${styles.cart_no} ${cartItems.length === 0 && styles.hide
                        }`}
                    >
                      {cartItems && cartItems.length}
                    </span>{" "}
                  </a>
                </Link>
              </div>
            </div>
            {/* <Link href="/doctorProfile">
              <Text
                cursor="pointer"
                fontSize="14px"
                fontWeight="500"
                fontFamily="Asap"
              >
                Welcome
              </Text>
            </Link> */}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
