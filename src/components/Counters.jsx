import React, {
  Component
} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Counter';

class Counters extends Component {
  
  render() {
    let {counters, onReset, onDelete, onIncrease} = this.props;
    return(
      <div>
      <button className='btn btn-success m-2' onClick={onReset}>Reset</button>
    {counters.map(counter => <Counter key={counter.id} counter={counter} onDelete={onDelete}
    onIncrease={onIncrease}/>)}
      </div>
      )
    
  };
}

export default Counters;