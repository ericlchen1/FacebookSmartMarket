import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import EditableList from 'react-list-editable';
import 'react-list-editable/lib/react-list-editable.css';

class ExtendableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['a', 'b', 'c']
    };
  }
  onListChange(newList) {
    this.setState({
      list: newList
    });
    console.log(this.state.list);
  }

//   getCurrentList() {
//     if (this.state.list.length === 0) {
//       return <span>List is empty 😞</span>;
//     }

//     return this.state.list.map((item, index) => {
//       return (
//         <li key={index}>
//           <span className='list-item' title={item}>
//             {item}
//           </span>
//         </li>
//       );
//     });
//   }
  render() {
    //   chrome.storage.sync.set({key: value}, function() {console.log('Value is set to ' + value);});
    return (
        <EditableList
            list={this.state.list}
            onListChange={this.onListChange.bind(this)}
            placeholder='Enter a value'
        />
    );
  }
}

export default ExtendableList;