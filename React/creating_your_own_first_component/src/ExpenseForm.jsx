import React, { useState } from 'react'
import './ExpensForm.css'
const ExpenseForm = () => {

    const [title, setTitle] =  useState("")
    const [amount, setAmount] =  useState("")
    const [date, setDate] =  useState("")
    return (
        <>
            <div className='form-wrapper mt-3'>
                <div className="row ps-4 pe-4 pt-2 pb-3">
                <div class="mb-3 col-md-6">
                    <label for="Title" class="form-label">Title</label>
                    <input type="text" class="form-control" onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <div class="mb-3 col-md-6">
                    <label for="Amount" class="form-label">Amount</label>
                    <input type="text" class="form-control" onChange={(e)=>setAmount(e.target.value)}/>
                </div>
                <div class="mb-3 col-md-6">
                    <label for="Amount" class="form-label">Date</label>
                    <input type="date" class="form-control" onChange={(e)=>setDate(e.target.value)}/>
                </div>
                </div>
                <button type="submit" class="btn btn-primary w-25 float-end me-3">Add Expense</button>
            </div>

            <div>
                <p> title:{title} Amount:{amount} Date:{date}</p>
            </div>
        </>
    )
}

export default ExpenseForm