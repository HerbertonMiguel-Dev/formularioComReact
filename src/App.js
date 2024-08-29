import React, {Component} from "react";
import Feed from "./components/Feed";


class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      feed:[
        {id: 1, username: 'Herberton', curtidas: 10, comentarios: 2},
        {id: 2, username: 'Miguel', curtidas: 11, comentarios: 3},
        {id: 3, username: 'Rafael', curtidas: 12, comentarios: 4},
        {id: 4, username: 'Carol', curtidas: 1, comentarios: 1},
      ]
    };
  }

  render(){
    return(
      <div>
        {this.state.feed.map((item)=>{
          return(
            <Feed key={item.id} username={item.username} curtidas={item.curtidas} comentarios={item.comentarios}/>
          )
        })}
      </div>
    )
  }
}

export default App;