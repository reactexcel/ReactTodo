import React from 'react';

export default class Displaylist extends React.Component {
  constructor(){
    super();
    this.state={};
  }
  render(){
    return (<ul style={{'listStyle': 'none', 'paddingLeft': '0px'}}>
      {this.props.todoList.map((item,i) => 
        <li style={{'display': 'block','width':'700px', 'border': '1px solid rgba(0,0,0,.1)', 'borderRadius': '2px', 'padding': '3px 10px' }} key={i}>
          <input
            checked={item.checked}
            type="checkbox"
            style={{ fontSize:'x-large'}}/>
          <span style={{'display': 'inlineBlock', 'padding': '0px 10px' }}>{item.name}</span>
          {
            item.checked ? 
              <a style={{'display': 'inlineBlock', 'float': 'right', 'padding': '0px 10px', 'background': 'grey', 'borderRadius': '10px', 'fontSize': '10px', 'marginTop': '4px', 'color': '#fff', 'cursor': 'pointer' }}>completed</a>
              :
            null
          }
        </li>
      )}
    </ul>);
  }
}
