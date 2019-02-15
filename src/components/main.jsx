import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './user';

class Main extends Component {

    render() {

        let usersList = this.props.userList;

        console.log('Main Component');
        console.log(usersList);

        return (
            <div className='main'>
                
                <h2>Team Members</h2>
                
                <div className='user-list-panel'>  
                    <ul className="user-list">
                        {usersList.map(user => {
                            return (
                                <li key={user.id}>
                                    <User key={user.id} avatar={user.avatar} 
                                        firstName={user.first_name} lastName={user.last_name}/>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                
            </div>
        );
      }
}

Main.propTypes = {
userList: PropTypes.array
}

export default Main;