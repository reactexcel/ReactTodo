import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {withRouter} from 'react-router';

class EditItem extends React.Component {
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
  componentWillMount(){
    const { id } = this.props.params;
    const list = this.state.toDoList[id];
    this.setState({toDoName: list.name});
  }
  handleSubmit(){
    
  }
  render(){
    const { error } = this.state;
    let border = error ? '1px solid rgba(255,0,0,.5)' : '1px solid rgba(0,0,0,.1)';
    return (<div className='container'>
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
      <div className='row'>
        <button style={{'display': 'block', 'outline': 'none', 'border': border, 'borderRadius': '4px', 'marginTop': '10px', 'background': '#fff'}} onClick={() => this.props.router.push('/')}>Go Back</button>
      </div>
    </div>
    );
  }
}
export default withRouter(EditItem);
