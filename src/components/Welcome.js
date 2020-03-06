import React, { useState } from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';
const Welcome = (props) => {

    const [expenseSlider, setExpenseSlider] = useState(15);
    const [expense, setExpense] = useState(0);
    const [salary, setSalary] = useState(0);
    const [savings, setSavings] = useState(0);

    const data = JSON.parse(localStorage.getItem('googleLogin'));
    const name = data.profileObj.givenName;

    let pData = {
        pathname: '/result'
    }

    const sliderHandle = (e) => {
        let newV = e.target.value;
        setExpenseSlider(newV);
        let newExpense = Math.floor((salary / 12) * (newV / 100));
        setExpense(newExpense);
        let newSavings = Math.floor((salary / 12) * (1 - (newV / 100)));
        setSavings(newSavings);
    }

    const salaryHandle = (e) => {
        let newV = e.target.value;
        setSalary(newV);
        let newExpense = Math.floor((newV / 12) * (expenseSlider / 100));
        setExpense(newExpense);
        let newSavings = Math.floor((newV / 12) * (1 - (expenseSlider / 100)));
        setSavings(newSavings);
    }

    const formatCurrency = (cur) => {
        return (Number(cur)).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: 2, minimumFractionDigits: 2 })
    }

    const handleSubmit =() => {
        const data = {
            expenseSlider: expenseSlider,
            salary: salary,
            savings: savings,
            expense: expense,
            name: name
        }
        localStorage.setItem('userObj', JSON.stringify(data));
    }

    return (
        <div className='welcome'>
            <div className="container">
                <div className="content">
                    <h3>Welcome to your monthly budget {name}</h3>
                    <div className="slider">
                        <input
                            type="range"
                            min="1" max="30"
                            value={expenseSlider}
                            onChange={(e) => sliderHandle(e)}
                            step="1"
                        />
                        <div className="electionNum">{expenseSlider}</div>
                    </div>
                    <div className="userfield">
                        <div className="row">
                            <span className="title">Your Salary</span>
                            <div className="dollar"><input type="number" placeholder="0.00" onChange={e => salaryHandle(e)} /></div>
                        </div>
                        <div className="row">
                            <span className="title">Your Expense</span>
                            <span className="field">${formatCurrency(expense)}</span>
                        </div>
                        <div className="row">
                            <span className="title">Your Savings</span>
                            <span className="field">${formatCurrency(savings)}</span>
                        </div>
                    </div>
                    <Link to={pData} className="btnSubmit" onClick={handleSubmit}>SUBMIT</Link>
                </div>
            </div>
        </div>
    )
}

export default Welcome;