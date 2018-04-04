import React from 'react';
import {withRouter} from 'react-router';

class Displaylist extends React.Component {
  constructor(){
    super();
    this.state={};
  }
  render(){
    return (<div className="row">
      <ul style={{'listStyle': 'none', 'paddingLeft': '0px'}}>
        {this.props.toDoList.map((item,i) => 
          <li
            style={{'display': 'block', 'width':'700px', 'border': '1px solid rgba(0,0,0,.1)', 'borderRadius': '2px', 'padding': '0px 10px' }}
            key={i}
            >
            <input
              onChange={() => this.props.toggle(item.id, 'check')}
              checked={item.checked}
              type="checkbox"
              style={{ fontSize:'x-large'}}/>
            <span
              style={{'display': 'inlineBlock', 'padding': '4px 510px 3px 10px' }}
              onClick={() => this.props.router.push(`/edit/${item.id}`)}
              >{item.name}</span>
            {
              item.checked ? 
                <a
                  style={{'display': 'inlineBlock', 'float': 'right', 'padding': '0px 10px', 'background': 'darkgrey', 'borderRadius': '10px', 'fontSize': '10px', 'marginTop': '4px', 'color': '#fff', 'cursor': 'pointer' }}
                  onClick={() => this.props.toggle(item.id, 'delete')}>
                  completed
                </a>
                :
              null
            }
          </li>
        )}
      </ul>
    </div>);
  }
}
export default withRouter(Displaylist);