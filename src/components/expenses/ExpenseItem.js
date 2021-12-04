import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import './Expenses.css';
import Card from '../ui/Card';
import React,{useState} from 'react';
function ExpenseItem(props)
{
    const [title,setTitle]=useState(props.title);

    
    const cf=()=>{
      setTitle('Updated');
      console.log(props.title);
    }
  /*   const ExpenseDate=new Date(2021,10,27);
    const ExpenseTitle="Car Parking";
    const ExpenseAmmout=200; */
    return (<Card className="expense-item">
       <ExpenseDate date={props.date} /> 
      
        <div className="expense-item__description">
            <h2>{title}</h2>
        <div className="expense-item__price">
            {props.ammount}
        </div>
        <button onClick={cf}>button</button>
        </div>
        
         </Card>)
}

export default ExpenseItem;