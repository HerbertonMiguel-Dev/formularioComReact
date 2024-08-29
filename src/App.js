import React, {Component} from "react";
import Feed from "./components/Feed";


class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      feed:[
        {id: 1, usarname: 'Herberton', curtidas: 10, comentarios: 2},
        {id: 2, usarname: 'Miguel', curtidas: 11, comentarios: 3},
        {id: 3, usarname: 'Rafael', curtidas: 12, comentarios: 4},
        {id: 4, usarname: 'Carol', curtidas: 13, comentarios: 5},
      ]
    };
  }

  render(){
    return(
      <div>
        {this.state.feed.map((item)=>{
          return(
            <Feed/>
          )
        })}
      </div>
    )
  }
}

export default App;