import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">React Routing</h1>
          </header>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/items" component={Items}/>
            <Route path="/category" component={Category}/>
          </Switch>
        </div>
    );
  }
}

export const Home = () => (
    <div>
      Home Component
      <ul>
        <li>
          <Link to="/items">Items</Link>
        </li>
        <li>
          <Link to="/category">Category</Link>
        </li>
      </ul>
    </div>
);

export const Items = () => (
    <div>
      <h1>Items Component</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </div>

);

export const Category = () => (
    <div>
      <h1>Category Component</h1>
      <ul>
        <li>Category 1</li>
        <li>Category 2</li>
        <li>Category 3</li>
        <li>Category 4</li>
      </ul>
    </div>
);

export default App;
