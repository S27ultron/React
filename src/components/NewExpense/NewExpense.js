import React from "react";
import { useState } from "react/cjs/react.development";
import ExpenseForm from "./ExpenseForm";
import './ExpenseForm.css'

const NewExpense=(props)=>{

  const [isEdit,setIsEdit]=useState(false);
    const saveExpesnseHandler=(enterdExpenseData)=>{
        const expenseData={
        ...enterdExpenseData,
        id:Math.random().toString()
    };
    props.onAddExpense(expenseData);
 
   
  } 
  const Bclick=()=>{
    setIsEdit(true);
  }

  const Bcancel=()=>{
    setIsEdit(false);
  }
    return <div className="new-expense">
      {!isEdit && <button onClick={Bclick}> Add New Expenses</button>}
       {isEdit && <ExpenseForm onSaveExpenseData={saveExpesnseHandler} onCancel={Bcancel}></ExpenseForm>}
    </div>
};

export default NewExpense;