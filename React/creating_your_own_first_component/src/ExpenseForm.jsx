import React, { useState } from 'react';
import './ExpensForm.css';

const ExpenseForm = () => {
    const [expenseDetails, setExpenseDetails] = useState({ title: "", amount: "", date: "" });
    const [submittedExpense, setSubmittedExpense] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setExpenseDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedExpense(expenseDetails);
        // Reset form fields after submission if needed
        setExpenseDetails({ title: "", amount: "", date: "" });
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
                    <button type="submit" className="btn btn-primary w-25 float-end me-3">Add Expense</button>
                </form>
            </div>

            {submittedExpense && (
                <div>
                    <p>Submitted Expense Details:</p>
                    <p>Title: {submittedExpense.title} Amount: {submittedExpense.amount} Date: {submittedExpense.date}</p>
                </div>
            )}
        </>
    );
};

export default ExpenseForm;
