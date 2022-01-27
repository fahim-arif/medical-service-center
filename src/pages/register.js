import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import Link from 'next/link'
import GoogleLogin from "react-google-login";
import {registerUser} from "../actions/userAction";
import {Button, Box, Select} from '@chakra-ui/react'
import Message from '../utils/Message'
import Loader from "../utils/Loading";
import {login} from "../actions/userAction";
import {useRouter} from 'next/router'
import axios from 'axios'

const SignUp = ({history, location}) => {
    const router = useRouter()
    const [nextStep, setNextStep] = useState(false);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);
    const [message2, setMessage2] = useState(null);
    const [token, setToken] = useState("");
    const [regType, setRegType] = useState('');
    const [medicalField, setMedicalField] = useState('')
    const [address, setAddress] = useState('');
    const [phone, setNumber] = useState('');

    const dispatch = useDispatch();

    const userRegister = useSelector((state) => state.userRegister);
    const {loading, error, user} = userRegister;

    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;

    useEffect(() => {
        if (user) {
            dispatch(login(email, password))
                .then(() => {
                    router.push("/");
                })
                .catch((error) => console.error(error));
        }
    }, [history, user, userInfo, dispatch]);

    const nextStepHandler = (e) => {
        e.preventDefault();
        setNextStep(true);
    };

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        setEmail(result.email);
        // console.log(result);
        setToken(token);
        setNextStep(true);
        try {
            // dispatch({ type: "AUTH", data: { result, token } });
        } catch (error) {
            console.error(error);
        }
    };

    // const googleFailure = (error) => {
    //     console.log("Failure");
    //     console.log(error);
    // };

    const submitDoctorHandler = async (e) => {
        e.preventDefault();
        if (name.length < 6) {
            setMessage2(
                "That’s too short. A great username must include at least 6 characters."
            );
        } else if (name.length > 5) {
            setMessage2("");
        }

        if (password.length < 6 && confirmPassword.length < 6) {
            setMessage("Password must be min. 6 characters.");
        } else if (confirmPassword !== password) {
            setMessage("Password did not matched");
        } else if (password === confirmPassword && name.length > 5) {
            const {data} = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/doctor`, {name, email, password, phone, medicalField, address})
            if (data) {
                localStorage.setItem("userInfo", JSON.stringify(data));
                router.push('/')
            }
            // dispatch(registerUser(name, email, password));
        }
        if (
            password.length > 5 &&
            confirmPassword > 5 &&
            password === confirmPassword
        ) {
            setMessage("");
        }
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (name.length < 6) {
            setMessage2(
                "That’s too short. A great username must include at least 6 characters."
            );
        } else if (name.length > 5) {
            setMessage2("");
        }

        if (password.length < 6 && confirmPassword.length < 6) {
            setMessage("Password must be min. 6 characters.");
        } else if (confirmPassword !== password) {
            setMessage("Password did not matched");
        } else if (password === confirmPassword && name.length > 5) {
            dispatch(registerUser(name, email, password));
        }
        if (
            password.length > 5 &&
            confirmPassword > 5 &&
            password === confirmPassword
        ) {
            setMessage("");
        }
    };
    return (
        <>
            {regType.length === 0 && <div className='SignUp-container pt-5'>
                <form onSubmit={submitHandler} className='SignUp-form'>
                    <div className='SignIn-heading'>Create account</div>
                    <div className='alertMessage'>
                        {message2 && <Message variant='danger'>{message2}</Message>}
                    </div>
                    <label className='signUp_label'>Select Account Type</label>
                    <Box display='flex'>
                        <Button m='10px' p='20px' onClick={() => setRegType('regular')}>Regular Account</Button>
                        <Button m='10px' p='20px' onClick={() => setRegType('doctor')}>Doctor Account</Button>
                    </Box>
                    {/* <input
                        onChange={(e) => setName(e.target.value)}
                        className='SignIn-email'
                        type='text'
                    /> */}
                    <div className='SignIn-button-continue-container'>
                        <button type='submit' className='SignIn-button-continue'>
                            Continue with Emergency Medical System
                        </button>
                    </div>
                    <div className='SignIn-remember-forgot-cotainer '>
                        By joining I agree to receive emails from Emergency Medical System.
                    </div>
                    <div className='SignIn-join-now-button'>
                        Already Joined?
                        <Link href='/login'>
                            <a className='SignIn-join-now'>
                                Sign In
                            </a>
                        </Link>
                    </div>
                </form>
            </div>
            }
            {regType === 'regular' &&
                <div>
                    <div className='signin_error_container'>
                        {/* {loading && <Loader></Loader>} */}
                        <div className='signup_error_msg'>
                            {/* {error && (
                            <Message className='signup_error_msg' variant='danger'>
                            {error}
                            </Message>
                        )} */}
                        </div>
                    </div>
                    <div className='text-center pt-4 mt-4'>
                        <Link href='/'>
                            <a>
                                <img src='/images/logo.png' alt='' />
                            </a>
                        </Link>
                    </div>
                    <div className='SignUp-container pt-5'>
                        <form onSubmit={submitHandler} className='SignUp-form'>
                            <div className='SignIn-heading'>Create account</div>
                            <div className='alertMessage'>
                                {message2 && <Message variant='danger'>{message2}</Message>}
                            </div>
                            <label className='signUp_label'>Your Full Name</label>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                className='SignIn-email'
                                type='text'
                            />
                            <label className='signUp_label'>Email</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                className='SignIn-email'
                                type='email'
                            />
                            <div> </div>
                            <div className='alertMessage'>
                                {message && <Message variant='danger'>{message}</Message>}
                            </div>
                            <label className='signUp_label'>Password</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                className='SignIn-email'
                                type='password'
                            />{" "}
                            <label className='signUp_label'>Re-enter Password</label>
                            <input
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className='SignIn-email'
                                type='password'
                            />
                            <div className='SignIn-button-continue-container'>
                                <button type='submit' className='SignIn-button-continue'>
                                    Continue with Emergency Medical System
                                </button>
                            </div>
                            <div className='SignIn-remember-forgot-cotainer '>
                                By joining I agree to receive emails from Emergency Medical System.
                            </div>
                            <div className='SignIn-join-now-button'>
                                Already Joined?
                                <Link href='/login'>
                                    <a className='SignIn-join-now'>
                                        Sign In
                                    </a>
                                </Link>
                            </div>
                        </form>
                    </div>
                    )
                </div>
            }
            {/* Doctor */}
            {regType === 'doctor' &&
                <div>
                    <div className='signin_error_container'>
                        {/* {loading && <Loader></Loader>} */}
                        <div className='signup_error_msg'>
                            {/* {error && (
                            <Message className='signup_error_msg' variant='danger'>
                            {error}
                            </Message>
                        )} */}
                        </div>
                    </div>
                    <div className='text-center pt-4 mt-4'>
                        <Link href='/'>
                            <a>
                                <img src='/images/logo.png' alt='' />
                            </a>
                        </Link>
                    </div>
                    <div className='SignUp-container pt-5'>
                        <form onSubmit={submitDoctorHandler} className='SignUp-form'>
                            <div className='SignIn-heading'>Create account</div>
                            <div className='alertMessage'>
                                {message2 && <Message variant='danger'>{message2}</Message>}
                            </div>
                            <label className='signUp_label'>Your Full Name</label>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                className='SignIn-email'
                                type='text'
                            />
                            <label className='signUp_label'>Email</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                className='SignIn-email'
                                type='email'
                            />
                            <form>

                            <label className='signUp_label'>Your Field of Medical Service</label>
                                {/* <Box mx='50px' minW='312px'> */}

                                    <Select
                                     onChange={(e) => setMedicalField(e.target.value)}
                                     >
                                        <option value='default'>Select medical field</option>
                                        <option value='Heart'>Heart</option>
                                        <option value='Neurology'>Neurology</option>
                                        <option value='Physician'>Phyisican</option>
                                        <option value='Liver'>Liver</option>
                                        <option value='Skin'>Skin</option>
                                        <option value='Rediology'>Rediology</option>
                                    </Select>
                                {/* </Box> */}
                            </form>
                            {/* <input
                                onChange={(e) => setName(e.target.value)}
                                className='SignIn-email'
                                type='text'
                            /> */}
                            <label className='signUp_label'>Your Address</label>
                            <input
                                onChange={(e) => setAddress(e.target.value)}
                                className='SignIn-email'
                                type='text'
                            />
                            <label className='signUp_label'>Your Phone Number</label>
                            <input
                                onChange={(e) => setNumber(e.target.value)}
                                className='SignIn-email'
                                type='email'
                            />
                            <div>
                            </div>
                            <div className='alertMessage'>
                                {message && <Message variant='danger'>{message}</Message>}
                            </div>
                            <label className='signUp_label'>Password</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                className='SignIn-email'
                                type='password'
                            />{" "}
                            <label className='signUp_label'>Re-enter Password</label>
                            <input
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className='SignIn-email'
                                type='password'
                            />
                            <div className='SignIn-button-continue-container'>
                                <button type='submit' className='SignIn-button-continue'>
                                    Continue with Emergency Medical System
                                </button>
                            </div>
                            <div className='SignIn-remember-forgot-cotainer '>
                                By joining I agree to receive emails from Emergency Medical System.
                            </div>
                            <div className='SignIn-join-now-button'>
                                Already Joined?
                                <Link href='/login'>
                                    <a className='SignIn-join-now'>
                                        Sign In
                                    </a>
                                </Link>
                            </div>
                        </form>
                    </div>
                    )
                </div>
            }
        </>
    );
};

export default SignUp;
