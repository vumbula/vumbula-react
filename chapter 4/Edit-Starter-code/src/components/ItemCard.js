import React from 'react';
import PropTypes from 'prop-types';
//TODO 4: Destructure the props within the function argument list and also make the necesaary changes for the
//TODO to keep function. Do not forget to add the toggleEdit prop to the destrucured list.
//TODO 5: Add an onClick attribute to the edit button with the toggleEditing prop as its value.
//TODO 6: Use the isEditing property of the item to toggle between showing Edit or Save as the button text.
//TODO 8: Use the item.isEditing property to show either the input fields or just display the name and price
// TODO of the item within the card body.
//TODO 9: Add the value attribute to the name input element with a value of item.name and
// TODO: the price input element with item.price
//TODO 13: Add onChange to the argument list
//TODO 14: Use an arrow function which accepts an event and  returns the onChange prop as the value to the onChange attribute
// TODO: to both the name and price input elements passing it the event and index.
export const ItemCard = (props) => (
    <div className="col-md-6 col-lg-3">
      <div className="card mb-3">
        <img className="card-img-top" src={props.image}/>
        <div className="card-body">
          <div>
            <h4 className="card-title text-center">{props.item.name}</h4>
            <div className="row justify-content-center mb-4">
              <p className="card-text">
                <span className="badge badge-secondary py-2 mr-5">Price</span>
                <span>${props.item.price}</span>
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div>
              <button
                  type="button"
                  className="btn btn-primary mr-2">
                Edit
              </button>
              <button
                  type="button"
                  className="btn btn-primary">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
);
//TODO 7: Add toggleEdit to the list of propTypes.
//TODO 15: Add onChange to the list of propTypes.
ItemCard.propTypes = {
  image: PropTypes.string.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  }),
};