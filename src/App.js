import React, { Component } from 'react'; // Correct way to import React
// import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
// import Counter from './components/counter';
;
// import  Greet  from './components/Greet'; // Assuming Greet is the default export in './components/Greet'
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Greet from './components/Greet';
// import Message from './components/message'


class App extends Component{
  render(){
    return (
      <div className="App">
        {/* <Message/> */}
        <Counter/>    {/* <Greet />
        <Welcome />
        {/* <Hello /> */}
        {/* <Greet name="Bruace" heroName=" Batman">
          <p>This is Children props</p>
        </Greet> */}
        {/* <Greet name="Clarck" heroName=" Superman"/>
        <button>Action</button>
        <Greet name="Diana" heroName =" Wonder Superman"/> */} 
      </div>
    )
  }
}
export default App;
  