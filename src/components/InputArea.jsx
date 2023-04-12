import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");
  //the "inputText" is what the user puts inside the html "input"

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText);
          //when adding an element, the state of the inputText updates
          //when the "Add" btn is clicked, the function "addItem" is called, and pass over to the app component the item
          setInputText(""); //back to empty, so you can add a new item
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
