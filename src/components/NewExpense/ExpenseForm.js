import React from "react";
import { useState } from "react/cjs/react.development";

const ExpenseForm=(props)=>{

   const SubmitHandler=(event)=>{
       event.preventDefault();


       const expenseData={
           title:enterTitle,
           ammount:+enterAmmount,
           date:new Date(enterDate)
       };
     
       props.onSaveExpenseData(expenseData);
       setEnterTitle('');
       setEnterAmmount('');
       setEnterDate('');
   }

   
   const [enterTitle,setEnterTitle]=useState();
   const [enterAmmount,setEnterAmmount]=useState();
   const [enterDate,setEnterDate]=useState();

  /*  const [userInput,setUserInput]=useState({
        enterTitle:'',
        enterAmmount:'',
        enterDate:''
   }); */
    const Tl=(event)=>{
        setEnterTitle(event.target.value);
        console.log(enterTitle);
      /*   setUserInput({
            ...userInput,
            enterTitle:event.target.value,
        }) */
        
       /*  setUserInput((prevState)=>
        {
            return{
                ...prevState,
                enterTitle:event.target.value,
            };           
        }); */
    };

    const Am=(event)=>{
        setEnterAmmount(event.target.value);
        console.log(enterTitle);
      /*   setUserInput({
            ...userInput,
            enterTitle:event.target.value,
        }) */
        
       /*  setUserInput((prevState)=>
        {
            return{
                ...prevState,
                enterTitle:event.target.value,
            };           
        }); */
    };


    const Da=(event)=>{
        setEnterDate(event.target.value);
        console.log(enterTitle);
      /*   setUserInput({
            ...userInput,
            enterTitle:event.target.value,
        }) */
        
       /*  setUserInput((prevState)=>
        {
            return{
                ...prevState,
                enterTitle:event.target.value,
            };           
        }); */
    };

   
    return (
    <form onSubmit={SubmitHandler}>
        <div className="new-expense__controls">
           <div className="new-expense__controls">
                <label>Title</label>
                <input type="text" onChange={Tl} value={enterTitle}></input>
           </div>

           <div className="new-expense__controls">
                <label>Ammount</label>
                <input type="number" min="0.01" step="0.01" value={enterAmmount} onChange={Am}/>
           </div>

           <div className="new-expense__controls">
                <label>Date</label>
                <input type="date" min="2020-01-01" max="2021-12-31" onChange={Da} value={enterDate}></input>
           </div>

           <div className="new-expense__actions">

               
            <button onClick={props.onCancel}>Cancel</button>
             <button type="submit">Submit</button>
           </div>
       
    </div>
    </form>
    )
};

export default ExpenseForm;