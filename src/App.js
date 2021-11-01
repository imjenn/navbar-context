import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom';

import FormWrapper from './components/FormWrapper';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <div className="App">
      <Wrapper>
        <Navbar/>
        <FormWrapper/>
      </Wrapper>
    </div>
  );
}
export default App;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
