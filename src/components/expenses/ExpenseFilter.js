import React from "react";
import './ExpenseFilter.css';

const ExpenseFilter=(props)=>{
    const dropD=(event)=>{
           props.onChangeFilter(event.target.value);
    };
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filet By Year</label>
                <select onChange={dropD} value={props.selected}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>

                </select>
            </div>
        </div>
    );
}

export default ExpenseFilter;