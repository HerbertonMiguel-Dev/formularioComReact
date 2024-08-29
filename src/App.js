import React, {Component} from "react";


class App extends Component{
  

  render(){
    return(
      <div>
        <h2>Login</h2>
        Email:
        <input type="email" name="email" value="teste@teste.com"/> 
        <br/>
        senha:
        <input type="password" name="senha" value="123123"/>
      </div>
    )
  }
}

export default App;