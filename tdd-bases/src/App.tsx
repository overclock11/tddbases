import React, {FormEvent, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [isUploading, setIsuploading] = useState(false);

  const postMessage = (event: any) => {
    event.preventDefault();
    console.log(event);
    setIsuploading(true);
    setTimeout(()=>{
      setIsuploading(false);
      setName('');
    }, 1100)
  }

  const errorMessage = () => {
    console.log('error');
  }
  const setValueOfName = (event: any) => {
    setName(event.target.value);
  }

  const blurForTest = () => {
    console.log('se ejecuto el blur');
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h4>
          Nuevo
        </h4>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <form onSubmit={(e)=> postMessage(e)}>
          <label>
            Name:
            <input
                type="text"
                onChange={setValueOfName}
                value={name}
                required={true}
                title={'el nombre es requerido'}
                onBlur={blurForTest}
                data-testid={'inputName'}
                placeholder={'nombre'}/>
          </label>
          <input type="submit" value="Submit" data-testid={'submitButton'} disabled={isUploading} />
        </form>
      </header>
    </div>
  );
}

export default App;
