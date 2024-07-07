import { useState, useImperativeHandle, forwardRef } from "react";
import { evaluate } from "mathjs";
import Screen from "./Screen";

const Calculator = forwardRef((props, ref) => {
  const [input, setInput] = useState('');
  const [resultShown, setResultShown] = useState(false);

  useImperativeHandle(ref, () => ({

    addInput: (value) => {
      if (resultShown) {
        setInput(value);
        setResultShown(false);
      } else {
        setInput((prevInput) => prevInput + value);
      }
    },

    clearInput: () => {
      setInput('')
      setResultShown(false);
    },

    calculateResult: () =>{
        if (input) {
        setInput(evaluate(input).toString());
        setResultShown(true);
      } else {
        setInput('');
      }
    }

  }));

  return (
    <div>
      <Screen input={input} />
    </div>
  );
});

export default Calculator;
