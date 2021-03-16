import React, {
  Component
} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
class Counter extends Component {
  state = {
    value: this.props.counter.value,
    tags: ['tag1', 'tag2', 'tag3']
  };
  
  constructor(props) {
    super(props);
    
  }
  
  render () {
    let {value} = this.state;
    let {tags} = this.state;
    let listTags = tags.map(tag => <li>{tag}</li>);
    return (
      <div className='m-4'>
      <h1 className={this.getClassName()}>{this.formatCount()}</h1>
      <button className='btn btn-primary'onClick={() => {this.props.onIncrease(this.props.counter)}}>Increase</button>
      <button className='btn btn-danger'onClick={()=>{this.props.onDelete(this.props.counter.id)}}>Delete</button>
      </div>
      );
  };
  
  formatCount = () => {
    let {value} = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
  
  plus = () => {
    let {value} = this.props.counter;
    value++;
    
  }
  
  getClassName = () => {
    let {value} = this.props.counter;
    if (value === 0) {
      return 'badge badge-warning m-2';
    } else {
      return 'badge badge-primary m-2';
    }
  }
}

export default Counter;