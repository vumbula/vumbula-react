import React, {Component} from 'react';
import image from '../img/vumbulaitem.png';
import {ItemCard} from "./ItemCard";
import {Footer} from "./Footer";
import {Nav} from "./Nav";
import {Jumbtron} from "./Jumbtron";
import {AddItem} from "./AddItem";

class App extends Component {
  state = {
    name: "",
    price: "",
    items: [
      {
        id: 1,
        name: "Noodles",
        price: "15"
      },
      {
        id: 2,
        name: "Mangoes",
        price: "10"
      },
      {
        id: 3,
        name: "Oranges",
        price: "20"
      },
      {
        id: 4,
        name: "Passion Fruits",
        price: "14"
      }
    ]
  };

  /**
   * Handle input changes in the AddItem component.
   * @param event
   */
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  /**
   * Add an item to state.
   * @param event
   */
  addItem = event => {
    event.preventDefault();
    const {name, price} = this.state;
    const itemsInState = this.state.items;
    const itemsArrayLength = itemsInState.length;
    const id = itemsArrayLength ? (itemsInState[itemsArrayLength - 1].id + 1) : 1;
    this.setState({
      items: [
        ...itemsInState,
        Object.assign({}, {
          id,
          name,
          price
        })
      ],
      name: "",
      price: ""
    })
  };

  //TODO 1: Define an arrow function and call it toggleItemEditing that accepts index as its only argument.
  //TODO 2: Use the setState function to add the isEditing property to an item whose index matches the passed
  //TODO in index.
  //TODO 10: Define an arrow function  with a name of handleItemUpdate which accepts an event and index as its only arguments
  //TODO 11: Implement the functionality to update the name and/or price of an item with the passed in index.
  //TODO 3: Add toggleEdit as a prop to the ItemCard component and define an arrow function that calls
  // TODO the toggleItemEditing function passing it the index
  //TODO 12: Add an onChange prop on the ItemCard component with this.handleItemUpdate as its value
  render() {
    const {name, price} = this.state;
    return <div>
      <Nav/>

      <Jumbtron/>

      <div className="container pt-4">

        <AddItem
            name={name}
            price={price}
            onChange={this.handleInputChange}
            onSubmit={this.addItem}
        />

        <h1 className="display-4 my-4 text-center text-muted">Items</h1>

        <div className="row">
          {
            this.state.items.map((item, index) =>
                <ItemCard
                    key={item.id}
                    index={index}
                    image={image}
                    item={item}
                />
            )
          }
        </div>

        <hr/>
        <Footer/>
      </div>
    </div>;
  }
}

export default App;
