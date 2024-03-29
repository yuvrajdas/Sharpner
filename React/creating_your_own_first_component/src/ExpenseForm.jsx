import React, { useState } from 'react';
import './ExpensForm.css';

const ExpenseForm = () => {
    const [expenseDetails, setExpenseDetails] = useState({ title: "", amount: "", date: "" });
    const [expenseData, setExpenseData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [formVisible, setFormVisible] = useState(false)

    const showFormVisibility = ()=>{
        setFormVisible(true);
    }

    const hideFormVisibility = ()=>{
        setFormVisible(false);
    }

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

    const filterHandler = (e)=>{
        const dateKey = e.target.value.toLowerCase();
        alert(dateKey)
        const filteredExpenses = expenseData.filter((ele) => 
        ele.date.toLowerCase().includes(dateKey)
    );
    console.log(filteredExpenses);
    setFilteredData(filteredExpenses);
    }

    return (
        <>
            <div className='form-wrapper mt-3'>
                <form onSubmit={handleSubmit}>
                {formVisible ?
                    <div className="row ps-4 pe-4 pt-2 pb-3">
                        <div className="mb-3 col-md-6">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" required name="title" value={expenseDetails.title} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3 col-md-6">
                            <label htmlFor="amount" className="form-label">Amount</label>
                            <input type="number" className="form-control" required name="amount" value={expenseDetails.amount} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3 col-md-6">
                            <label htmlFor="date" className="form-label">Date</label>
                            <input type="date" className="form-control" name="date" value={expenseDetails.date} onChange={handleInputChange} />
                        </div>
                    </div>
                    :'' }
                    <div className='d-flex justify-content-end w-100 pe-3 gap-2'>
                        <input type="text" className="form-control w-25" placeholder='Search here...' onKeyUp={searchHandler} />
                        { formVisible ? <div className="btn text-white" onClick={hideFormVisibility}> Cancel </div> : '' }
                        <button type="submit" className="btn btn-primary w-25" onClick={showFormVisibility}>Add Expense</button>
                    </div>
                </form>
            </div>

            <div className='list-wrapper mt-3 h-auto'>
                <div className='filter-section d-flex justify-content-between p-3'>
                    <span>Filter by year</span> 
                    <select name="" id="" className='form-select shadow-none w-25' onChange={filterHandler}>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                    </select>
                </div>
                <div className="row m-auto p-3">
                    {
                        filteredData.length === 1 ? <h4 className='text-white mb-2'>Only single Expense here. Please add more...</h4> : !filteredData.length ? <h4 className='text-white text-center'>There are no expenses</h4> :''
                    }
                    {
                        filteredData.map((ele, idx) => (
                            <div className="content mb-3" key={idx}>
                                <div className='content__data'>
                                    <span>{ele.date}</span>
                                    <span>{ele.title}</span>
                                </div>
                                <div className='amount'>$ {ele.amount}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default ExpenseForm;
