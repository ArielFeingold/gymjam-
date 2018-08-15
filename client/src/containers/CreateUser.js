import React, { Component } from 'react';
import Signup from '../components/Signup';

class CreateUser extends Component {

  createUser = (user) => {
    fetch("http://localhost:3001/api/users", {
      method: "POST",
      body: JSON.stringify({params:{
        name: user.username,
        email: user.email,
        password: user.password,
        password_confirmation: user.password_confirmation
      }})
    })
    .then( (response) => {
       let myData = response.json()
       // return myData;
       this.setState({
          data: myData
       })
    })
    .then( (json) => {
       console.log('parsed json', json)
    })
    .catch( (ex) => {
       console.log('parsing failed', ex)
    })
  }
  render(){
    return(
      <Signup state={this.state} onSubmit={this.createUser}/>
    )
  }


}

export default CreateUser;
