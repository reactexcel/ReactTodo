import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {withRouter} from 'react-router';
import { connect } from 'react-redux';
import { changeName } from './redux/actions';
import Displaylist from './Displaylist';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      toDoName: '',
      toDoList: [
        {id: 0, name: 'vikas', checked: true}, 
        {id: 1, name: 'nitesh', checked: false}
      ],                                           // hard coded json data
      error: false,
      edit: false
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
    const { toDoName, toDoList, error } = this.state;
    if(toDoName == ''){
      this.setState({error: true})
    } else{
      const newToDoList = toDoList;
      newToDoList.push({id: toDoList.length, name: toDoName, checked: false});
      this.setState({toDoName:'', toDoList: newToDoList, error: false});
    }
  }
  render() {
    const { error, edit } = this.state;
    let border = error ? '1px solid rgba(255,0,0,.5)' : '1px solid rgba(0,0,0,.1)';
    return (
      <div className='container'>
        <div className='row'>
          <h1 style={{'padding': '1em 0'}}>Todo App</h1>
        </div>
        <Displaylist
          toggle={this.toggle.bind(this)}
          toDoList={this.state.toDoList}
        />
        <div className='row'>
          <h5 className='col-xs-12' style={{'padding': '1em 0'}}>Todo</h5>
        </div>
        <div className='row'>
          <form className='col-xs-12' onSubmit={this.handleSubmit.bind(this)}>
            <input
              style={{'display': 'block', 'outline': 'none', 'border': border, 'borderRadius': '2px', 'width': '700px', 'padding': '3px 5px' }}
              onChange={(e) => this.setState({toDoName: e.target.value})}
              value={this.state.toDoName}
              className={error ? 'text-danger' : null}
              />
            <button
              style={{'display': 'block', 'outline': 'none', 'border': border, 'borderRadius': '4px', 'marginTop': '10px', 'background': '#fff'}}
            > submit </button>
          </form>
        </div>
      </div>
    )
  }
}

export function mapStateToProps(state) {
  return {
    name: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNameChange: (e) => dispatch(changeName(e.target.value))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);