import React, {useState} from "react";
import Persons from "./components/Persons";

 const persons = [{ name: "Arto Hellas", number: '0400000000'  }, { name: "Esko Ukkonen", number: '0401111111'}];
const App = () => {
 
const[persona, setPersona] =useState(persons);
  //THis variable has been used to transfer child to parent
  const savePersonHandler=(enteredExpenseData) => {
    //Spread operator has been used to copy all the properties from old to new in this case from enteredExpenseData to personData
    //through whihc id was added, something could be sent to parent and be worked
    const personData = { 
      ...enteredExpenseData, id: Math.floor(Math.random() *1000).toString()
      
    }
    const updatedPersona = [personData, ...persons];
setPersona( updatedPersona);
console.log(setPersona);
  }
  return (
    <div>
      <Persons persons={persons} onSavePersonHandler={savePersonHandler} />
    </div>
  );
};

export default App;


