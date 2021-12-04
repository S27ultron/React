
/*
import './components/expenses/Expenses.css';
 */
import './Expenses.css'
import Card from "../ui/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react/cjs/react.development';
import ExpensesList from './ExpensesList';
import ExpensesChar from './ExpensesChar';
function Expenses(props) {
 const [filterYear,setFilterYear]=useState('2020');

  const filterChangedHandler=selectedYear=>{
    setFilterYear(selectedYear);

  };

  const fil=props.expenses.filter(expense=>{
    return expense.date.getFullYear().toString()===filterYear;    
  });



 
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} onChangeFilter={filterChangedHandler}/>
    
        <ExpensesChar expenses={fil}/>
       <ExpensesList items={fil}></ExpensesList>
     {/*  <ExpenseItem
        title={props.expenses[0].title}
        ammount={props.expenses[0].ammount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        ammount={props.expenses[1].ammount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        ammount={props.expenses[2].ammount}
        date={props.expenses[2].date}
      /> */}
    </Card>
  );
}

export default Expenses;