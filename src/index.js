import React from "react";
import ReactDOM from "react-dom";

import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import FormWrapper from "./components/FormWrapper";


function App() {
  return (
    <Wrapper>
      <Navbar />
      <FormWrapper />
    </Wrapper>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
