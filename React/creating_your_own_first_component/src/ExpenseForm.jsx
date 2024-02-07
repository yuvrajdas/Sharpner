import React from 'react'
import './ExpensForm.css'
const ExpenseForm = () => {


    return (
        <>
            <div className='form-wrapper mt-3'>
                <div className="row ps-4 pe-4 pt-2 pb-3">
                <div class="mb-3 col-md-6">
                    <label for="Title" class="form-label">Title</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="mb-3 col-md-6">
                    <label for="Amount" class="form-label">Amount</label>
                    <input type="text" class="form-control"/>
                </div>
                <div class="mb-3 col-md-6">
                    <label for="Amount" class="form-label">Amount</label>
                    <input type="date" class="form-control"/>
                </div>
                </div>
                <button type="submit" class="btn btn-primary w-25 float-end me-3">Add Expense</button>
               
            </div>
        </>
    )
}

export default ExpenseForm