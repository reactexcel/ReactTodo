import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Displaylist from './Displaylist';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      toDoName: '',
      toDoList: [
        {id: 0, name: 'vikas', checked: true}, 
        {id: 1, name: 'nitesh', checked: false}
      ]                                           // hard coded json data
    };
  }
  toggle(itemToBeDeleted, Case){
    console.log(this.state.toDoList, itemToBeDeleted, Case);
    if(Case === 'check'){
      
    } else if(Case === 'delete'){

    }
  }
  handleSubmit(event){
    event.preventDefault();
    const { toDoName, toDoList } = this.state;
    const newToDoList = toDoList;
    newToDoList.push({id: toDoList.length, name: toDoName, checked: false});
    this.setState({toDoName:'', toDoList: newToDoList});
  }
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <h1 style={{'padding': '1em 0 0 .5em'}}>Todo App</h1>
        </div>
        <Displaylist
          toggle={this.toggle.bind(this)}
          toDoList={this.state.toDoList}
        />
        <div className='row'>
          <h5 className='col-xs-12' style={{'padding': '1em 0 0 .5em'}}>Todo</h5>
          <form className='col-xs-12' onSubmit={this.handleSubmit.bind(this)}>
            <input
              style={{'display': 'block', 'outline': 'none', 'border': '1px solid rgba(0,0,0,.1)', 'borderRadius': '2px', 'width': '700px', 'padding': '3px 5px' }}
              onChange={(e) => this.setState({toDoName: e.target.value})}
              value={this.state.toDoName}
              />
            <button
              style={{'display': 'block', 'outline': 'none', 'border': '1px solid rgba(0,0,0,.1)', 'borderRadius': '4px', 'marginTop': '10px', 'background': '#fff'}}
            > submit </button>
          </form>
        </div>
      </div>
    )
  }
}
