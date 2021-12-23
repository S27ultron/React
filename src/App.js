
import './App.css';
import ExpenseItem from './components/expenses/ExpenseItem';
import Expenses from './components/expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';
import './components/NewExpense/NewExpense.css';
import { useState } from 'react/cjs/react.development';

const dummy_expenses=[{
  id:1,title:'Car',ammount:'1000',date:new Date(2021,10,2)},
  {id:2,title:'Bike',ammount:'9000',date:new Date(2021,11,17)},
  {id:3,title:'Honda City',ammount:'8000',date:new Date(2021,12,27)},
  {id:4,title:'FDA',ammount:'8000',date:new Date(2020,8,20)}
];
const App=()=> {


const [expenses,setExpenses]=useState(dummy_expenses);
   const addExpenseHandler=expenses=>{
    setExpenses((prevExpenses)=>{
      return [expenses,...prevExpenses];
    });
   };
  return (
    <div >
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}></Expenses>
      <Expenses expenses={expenses}></Expenses>

    </div>
  );
};

export default App;
