import React from "react";

const SearchBox = ({ onSearchChange, searchField }) => {
  return (
    <div className="pa2 border-box">
      <input
        className="input-reset pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;
