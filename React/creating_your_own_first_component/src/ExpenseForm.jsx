import React, { useState } from 'react';
import './ExpensForm.css';

const ExpenseForm = () => {
    const [expenseDetails, setExpenseDetails] = useState({ title: "", amount: "", date: "" });
    const [expenseData, setExpenseData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setExpenseDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newExpenseData = [...expenseData, expenseDetails];
        setExpenseData(newExpenseData);
        setFilteredData(newExpenseData);
        setExpenseDetails({ title: "", amount: "", date: "" });
    };

    const searchHandler = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredExpenses = expenseData.filter((ele) =>
            ele.title.toLowerCase().includes(searchTerm)
        );
        setFilteredData(filteredExpenses);
    };

    return (
        <>
            <div className='form-wrapper mt-3'>
                <form onSubmit={handleSubmit}>
                    <div className="row ps-4 pe-4 pt-2 pb-3">
                        <div className="mb-3 col-md-6">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" name="title" value={expenseDetails.title} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3 col-md-6">
                            <label htmlFor="amount" className="form-label">Amount</label>
                            <input type="text" className="form-control" name="amount" value={expenseDetails.amount} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3 col-md-6">
                            <label htmlFor="date" className="form-label">Date</label>
                            <input type="date" className="form-control" name="date" value={expenseDetails.date} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className='d-flex justify-content-end w-100 pe-3 gap-2'>
                        <input type="text" className="form-control w-25" placeholder='Search here...' onKeyUp={searchHandler} />
                        <button type="submit" className="btn btn-primary w-25">Add Expense</button>
                    </div>
                </form>
            </div>

            <div className='form-wrapper mt-3 h-auto'>
                <div className="row m-auto p-3">
                    {
                        filteredData.map((ele, idx) => (
                            <div className="content mb-3" key={idx}>
                                <div className='content__data'>
                                    <span>{ele.date}</span>
                                    <span>{ele.title}</span>
                                </div>
                                <div>{ele.amount}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default ExpenseForm;
