import React from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';
import GOOGLE_CLIENT  from '../config/secret.default';
import './Login.css'

const Login = () => {
    console.log(GOOGLE_CLIENT)
    let history = useHistory();
    const responseSuccess = (res) => {
        localStorage.setItem("googleLogin", JSON.stringify(res));
        const newPath = "/welcome";
        history.push(newPath);
    }

    const responseFail = (res) => {
        console.log(res)
    }

    return (
        <div className="login">
            <GoogleLogin
                clientId={GOOGLE_CLIENT.GOOGLE_CLIENT}
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={responseSuccess}
                onFailure={responseFail}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default Login;