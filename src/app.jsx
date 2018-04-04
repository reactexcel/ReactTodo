import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Displaylist from './Displaylist';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      todoName: '',
      todoList: [
        {id: 0, name: 'vikas', checked: true}, 
        {id: 1, name: 'nitesh', checked: false}
      ]                                           // hard coded json data
    };
  }
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <h1 style={{'padding': '1em 0 0 .5em'}}>Todo App</h1>
        </div>
        <Displaylist todoList={this.state.todoList}/>
      </div>
    )
  }
}
