import React, { Component } from 'react';

class Header extends Component {

    render() {
      return (
        <div className='header'>
            <ul className="nav">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#clients">Our Clients</a></li>  
                <li><a href="#contact">Contact Us</a></li>
                <li>{this.props.date}</li>
            </ul>
        </div>
    );
      }
}


class Header2 extends Component {

    render() {
        return (
          <div className='header'>
            <h1> HEADER2 Component </h1>
          </div>
        );
      }
}
export {
    Header,  Header2
}