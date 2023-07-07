import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../../redux/store';
import './filter.css';

function Filter() {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <PersistGate loading={null} persistor={persistor}>
      <InputGroup className="filter-input">
        <FormControl
          type="text"
          name="filter"
          placeholder="Search by name"
          value={filter}
          onChange={handleFilterChange}
        />
      </InputGroup>
    </PersistGate>
  );
}

export default Filter;

