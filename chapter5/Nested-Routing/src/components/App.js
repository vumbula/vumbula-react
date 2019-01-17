import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/items" component={Items}/>
            <Route path="/category" component={Category}/>
          </Switch>
        </div>
    );
  }
}

export const Header = () => (
    <header className="App-header">
      <h1 className="App-title">React Routing Example</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/items">Items</Link>
        </li>
        <li>
          <Link to="/category">Category</Link>
        </li>
      </ul>
    </header>
);

export const Home = () => (
    <div>
      <h1> Home Component</h1>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
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

export const Category = ({match}) => (
    <div>
      <h1>Category Component</h1>
      <h5>Click on a category</h5>
      <ul>
        <li>
          <Link to={`${match.url}/shoes`}>Shoes</Link>
        </li>
        <li>
          <Link to={`${match.url}/food`}>Food</Link>
        </li>
        <li>
          <Link to={`${match.url}/dresses`}>Dresses</Link>
        </li>
      </ul>

      <Route
          path={`${match.path}/:categoryName`}
          render={props => (<div>{props.match.params.categoryName} category</div>)}
      />
    </div>
);

export default App;
