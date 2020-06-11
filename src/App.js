import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from "../src/components/myFirstComponent"
import MyFirstClassComponent from "./components/myFirstClassComponent"



function App() {

  return (
    <div className="App">

      <MyComponent name="Billiam" food="curry" />
      <MyFirstClassComponent name="Bea" />

    </div>
  );
}

export default App;
