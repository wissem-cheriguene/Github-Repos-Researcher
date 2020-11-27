import React from 'react';
import './searchbar.scss';
import PropTypes from 'prop-types';
import { Search } from 'semantic-ui-react';

const SearchBar = ({ value, handleSearchChange, handleSubmit }) => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <form className="searchbar" action="" onSubmit={(e) => handleSubmitForm(e)}>
      <Search
        value={value}
        onSearchChange={(e) => handleSearchChange(e.target.value)}
        size="big"
      />
    </form>
  );
};
SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
export default SearchBar;
