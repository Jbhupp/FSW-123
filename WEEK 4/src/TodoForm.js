import React, { useState } from "react";

function ToDoForm ({ addTodo }){

    const initialInputs = {text: ""}
    const [inputs, setInputs] = useState(initialInputs);
    const [errorMessage, setErrorMessage] = useState("");


    const handleChange = (e) => {
        var {value, name} = e.target

        setInputs({...inputs, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs)
        if(inputs.text === ""){
            let msg = "Your To Do is not filled in.";
                setErrorMessage(msg)
                return;
        } else{
            addTodo(inputs.text);
            setInputs(initialInputs);
        }
    }
    return (
        
        <form> 
            <input type={"text"} name={"text"} value={inputs.text} onChange={handleChange} required= "required"/> {errorMessage}

            <button type= "submit" onClick={handleSubmit}>Add To Do</button>
        </form>
    );
};

export default ToDoForm;