import React, {Component} from 'react';
import Counters from './components/Counters'
import NavBar from './components/NavBar';
import About from './components/About';
import Shop from './components/Shop';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  state = {
    counters: [
      {id: 1, value: 3},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0}
    ]
  }
  
  deleteCounter = (counterId) => {
    let counters = this.state.counters.filter(counter => counter.id !== counterId)
    this.setState({counters});
  };
  
  resetCounter = () => {
    let counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({counters});
  };
  
  increaseValue = (counter) => {
    let {counters} = this.state;
    let index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({counters});
  }
  
  getTotalProducts = () => {
    return this.state.counters.filter(c => c.value > 0).length;
  }
  
  render(){
    return (
      <Router>
        <NavBar totalProducts={this.getTotalProducts()}/>
        <Switch>
          <Route path='/counters' exact component={Counters}>
          <Counters onDelete={this.deleteCounter} onReset={this.resetCounter}
            onIncrease={this.increaseValue}
            counters={this.state.counters}/>
          </Route>
          <Route path='/about' exact component={About}>
          <About/>
          </Route>
          <Route path='/shop' exact component={Shop}>
          <Shop/>
          </Route>
          
        </Switch>
      
        
      </Router>
    );
  }
}

export default App;
 