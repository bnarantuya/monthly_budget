import React from 'react';
import { GoogleLogout } from 'react-google-login';
import GOOGLE_CLIENT from '../../config/secret';
import { useHistory } from 'react-router-dom';

const Result = () => {
    let data = localStorage.getItem('userObj');
    const history = useHistory();
    const logout = () => {
        localStorage.removeItem('googleLogin');
        localStorage.removeItem('userObj');
        history.push('/login');
    }

    if(!data) {
        return '';
    }
    data = JSON.parse(data);

    return (
        <div className="result">
            <div className="container">
                <h3>Welcome to your monthly budget {data.name}</h3>
                <div className="content">
                    <div className="userfield">
                        <div className="row">
                            <span className="title">Your Election</span>
                            <span className="field">{data.expenseSlider}%</span>
                        </div>
                        <div className="row">
                            <span className="title">Your Salary</span>
                            <span className="field">${data.salary}</span>
                        </div>
                        <div className="row">
                            <span className="title">Your Expense</span>
                            <span className="field">${data.expense}</span>
                        </div>
                        <div className="row">
                            <span className="title">Your Savings</span>
                            <span className="field">${data.savings}</span>
                        </div>
                    </div>
                </div>
                <GoogleLogout
                    clientId={GOOGLE_CLIENT.GOOGLE_CLIENT}
                    buttonText="Logout"
                    onLogoutSuccess={logout}
                >
                </GoogleLogout>
            </div>
        </div>
    )
}

export default Result;