import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';


const ExpensesList=(props)=> {
    let expenseContent=<p>No Record Found1</p>;


    if(props.items.length=== 0)
    {
      return <h2 className="expenses-list__fallback">Found No Expenses</h2>;
    }
 
  return <ul className="expenses-list">
      {props.items.map((expenses)=> (<ExpenseItem
        key={expenses.id}
        title={expenses.title}
        ammount={expenses.ammount}
        date={expenses.date}
      />))}
  </ul>
  } 
export default ExpensesList;