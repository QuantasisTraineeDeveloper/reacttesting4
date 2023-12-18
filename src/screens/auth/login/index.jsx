import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Footer from "../../../common/footer";
import { LoginContainer } from "./index.style";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, msProvider } from "../../../firebase";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const authUser = JSON.parse(localStorage.getItem("authUser") && localStorage.getItem("authUser") != 'undefined' ? localStorage.getItem("authUser") : null);
    const token = authUser?.["token"];

    if (token) {
      navigate("/profile");
    }
  }, [navigate]);

  const onSignUpwithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((data) => {
      const formData = {
        name: data?.user?.displayName,
        email: data?.user?.email,
        socialLogin: data?.providerId.split(".")?.[0],
        picture: data?.user?.photoURL,
      };

      dispatch(login({ formData, navigate, searchParams }));
    });
  };
  const onSignUpwithMs = () => {
    signInWithPopup(auth, msProvider).then((data) => console.log(data));
  };

  return (
    <div>
      <LoginContainer>
        <div className='container'>
          <div className='registratioModal'>
            <h1>Login</h1>
            <p>
              Its great to have you back. Explore <br /> what’s new for you.
            </p>
            <div className='registerLinks'>
              <div className='linkItem' onClick={onSignUpwithGoogle}>
                <div className='inner'>
                  <img src='/images/googleImage.svg' alt='' />
                  <span>Continue with Google</span>
                </div>
              </div>
              <div className='linkItem'>
                <div className='inner'>
                  <img src='/images/linkdInImage.svg' alt='' />
                  <span>Continue with LinkedIn</span>
                </div>
              </div>
              <div className='linkItem'>
                <div className='inner'>
                  <img src='/images/facebookImage.svg' alt='' />
                  <span>Continue with Facebook</span>
                </div>
              </div>
              <div className='linkItem' onClick={onSignUpwithMs}>
                <div className='inner'>
                  <img src='/images/microsoftImage.svg' alt='' />
                  <span>Continue with Microsoft</span>
                </div>
              </div>
            </div>
            <div className='login'>
              <p>
                New here?<Link to='/register'>Register</Link> Now
              </p>
            </div>
          </div>
        </div>
      </LoginContainer>
      <Footer />
    </div>
  );
};

export default Login;
