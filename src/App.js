import { Component } from 'react';
//import Counter from "./Components/Counter.jsx";
import TodoApp from "./Components/Todo/TodoApp";
import "./bootstrap.css";


class App extends Component {
  render() {
    return (
      <div>
     {/* <Counter/> */}
      <TodoApp/>
      </div>
    );
  }
}


export default App;
