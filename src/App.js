import React, { Component } from 'react';
import css from './App.css';

import Header from './components/Header';
import Firstpage from './components/Firstpage';

class App extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }


  render(){
    return (
      <div className="App">
        <Header/>
        <Firstpage/>
      </div>
    );
  }
  
}

export default App;