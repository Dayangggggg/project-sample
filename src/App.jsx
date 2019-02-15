import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header, Header2 } from './components/header';
import Main from './components/main';
import Footer from './components/Footer';
import axios from 'axios';
import {getUserList} from './util/service-helper';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      userList: [],
      date: new Date()
    }
  }

  componentDidMount() {
  //   this.TimerID = setInterval (
  //     () => {this.tick()},
  //     1000
  //  );
      this.getUsers();  
  }

  getUsers = () => {
    console.log('Initial Values');
    console.log(this.state.userList);
    
    getUserList()
     .then(res => {
    //   console.log(res.data);

      let user = res.data.data;

      this.setState({userList: user});
      console.log('updated state value');
      console.log(this.state.userList);

    });
  }

  tick() {
    console.log('Called tick method');

    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="App">
        
        <Header date= {this.state.date.toLocaleTimeString()}/>
        <Header2/>
        <Main userList= {this.state.userList} />
        <Footer/>

        </div>
    );
  }
}

export default App;
