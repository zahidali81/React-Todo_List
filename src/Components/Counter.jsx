import React, {Component} from 'react';
import './Counter.css';


class Counter extends Component {

    constructor() {
        super(); // need to use super to use this keyword

        this.state = { 
            counter : 0
        };
        // bind method so its availabe to increment method
        // this.increment = this.increment.bind(this); 
    }

    render() {
        return (
            <div className = "Counter_button">
                <CounterButton incrementMethod= {this.increment} decrementMethod= {this.decrement} />
                <CounterButton by = {5} incrementMethod= {this.increment} decrementMethod= {this.decrement}/>
                <CounterButton by = {10} incrementMethod= {this.increment} decrementMethod= {this.decrement}/>
                <span className = "countMiddle">Count: {this.state.counter}</span>
            </div>
        );
    }
   
     increment = (by) => {
         // console.log(`increment from child ${by}`)
          this.setState (
             (prevState) => {
                return {counter : this.state.counter + by}
              }
         );
     }

       decrement = (by) => {
         // console.log(`increment from child ${by}`)
          this.setState (
             (prevState) => {
                return {counter : this.state.counter - by}
              }
         )
     }
      reset = () => {
         // console.log(`increment from child ${by}`)
         this.setState ({counter : 0})
      }
}


// Counter class with state
class CounterButton extends Component {

    // Define initial state in a constructor
    constructor() {
        super(); // need to use super to use this keyword

        this.state = { 
            counter : 0
        };
        // bind method so its availabe to increment method
        // this.increment = this.increment.bind(this); 
    }

    render = () => {
        return (
            <div className = "counter">
               <button onClick = {this.increment}>+{this.props.by}</button>
                <button onClick = {this.decrement}>-{this.props.by}</button>
          </div>
        );
    }

    // arrow function prevents the use of binding a method 
     increment = () => {
            this.setState ({
             counter : this.state.counter+ this.props.by
         });
         this.props.incrementMethod(this.props.by);
     }

      decrement = () => {
            this.setState ({
             counter : this.state.counter - this.props.by
         });
         this.props.decrementMethod(this.props.by);
     }


}
CounterButton.defaultProps = {
    by : 1
}


export default Counter;