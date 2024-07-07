import './App.css';
import reactLogo from './images/react-logo.png';
import Button from './components/Button';
import ClearButton from './components/ClearButton';
import Calculator from './components/Calculator';
import { useRef } from 'react';

function App() {
  const calculatorRef = useRef(null);

  const handleAdd = (value) => {
    calculatorRef.current.addInput(value); 
  };

  const handleClearClick = () => {
    calculatorRef.current.clearInput();
  };

  const handleCalculate = (value) =>
  {
    calculatorRef.current.calculateResult();
  }

  return (
    <div className='App'>
      <div className='logo-container'>
        <img 
          src={reactLogo}
          className='react-logo'
          alt='logo'
        />
      </div>
      <div className='calculator-container'>
        <Calculator ref={calculatorRef} />
        <div className='row'>
          <Button handleClick={handleAdd}>1</Button>
          <Button handleClick={handleAdd}>2</Button>
          <Button handleClick={handleAdd}>3</Button>
          <Button handleClick={handleAdd}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick={handleAdd}>4</Button>
          <Button handleClick={handleAdd}>5</Button>
          <Button handleClick={handleAdd}>6</Button>
          <Button handleClick={handleAdd}>-</Button>
        </div>
        <div className='row'>
          <Button handleClick={handleAdd}>7</Button>
          <Button handleClick={handleAdd}>8</Button>
          <Button handleClick={handleAdd}>9</Button>
          <Button handleClick={handleAdd}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick={handleCalculate}>=</Button>
          <Button handleClick={handleAdd}>0</Button>
          <Button handleClick={handleAdd}>.</Button>
          <Button handleClick={handleAdd}>/</Button>
        </div>
        <div className='row'>
          <ClearButton handleClick={handleClearClick}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
