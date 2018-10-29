import React from 'react';
import PropTypes from 'prop-types';

export const AddItem = ({name, price, onChange, onSubmit}) => (
    <div className="row justify-content-center">
      <form className="form-inline" onSubmit={onSubmit}>
        <input
            type="text"
            className="form-control mb-2 mr-sm-2"
            placeholder="Item"
            value={name}
            name="name"
            onChange={onChange}
        />

        <div className="input-group mb-2 mr-sm-2">
          <input
              type="text"
              className="form-control"
              placeholder="Price"
              value={price}
              name="price"
              onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2 pxy-4">Save</button>
      </form>
    </div>
);

AddItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};