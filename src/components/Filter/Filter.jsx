import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import './filter.css';

function Filter({ filter, setFilter }) {
  const filterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <InputGroup className="filter-input">
      <FormControl
        type="text"
        name="filter"
        placeholder="Search by name"
        value={filter}
        onChange={filterChange}
      />
    </InputGroup>
  );
}

export default Filter;
