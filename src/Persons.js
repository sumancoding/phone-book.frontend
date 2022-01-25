import React, {useState } from 'react'



const Persons = (props) => {
  const[enteredName, setEnteredName] = useState('');
   const[enteredNumber, setEnteredNumber] = useState('');
  const NameChangeHandler =(e) => {
    setEnteredName(e.target.value)}

     const  NumberChangeHandler =(e) => {
  setEnteredNumber(e.target.value)
     }

    const submitHandler= (e) => {
      e.preventDefault();
      const expenseData= {
  name: enteredName, 
  number: enteredNumber
//Creating Objects to store the data
}

props.onSavePersonHandler(expenseData); //Taking props so that data can be passed from child to parent

console.log(expenseData);
//Two-way Binding
setEnteredName('');
    setEnteredNumber('');
    }
    



  return (
    <div>
    <h1> Phone Directory </h1>
    <form onSubmit={submitHandler}>
     <div><label htmlFor="name">Name: </label>
      <input type="text" id='name' value={enteredName} onChange={NameChangeHandler}/> </div> 
    <div><label htmlFor="num"> Enter Number: </label>
<input type="number" id='num' value={enteredNumber} onChange={ NumberChangeHandler }/> </div> 
<div><button type='submit'> Submit </button></div>
    </form>
<h3> Name and Number </h3>
{props.persons.map(person => (
  <p> {person.name} : {person.number} </p>
))}


    </div>
  )
}

export default Persons


