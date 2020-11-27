// == Import npm
import React, { useState } from 'react';
import axios from 'axios';
// == Import
import SearchBar from 'src/components/SearchBar';
import Messages from 'src/components/Messages';
import CardList from 'src/components/CardList';
import ConditionnalBtn from 'src/components/ConditionnalBtn';
import LoaderComp from 'src/components/LoaderComp';
import githubLogo from './GitHub-logo.png';
import './styles.scss';
// == Composant
const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [totalCount, setTotalCount] = useState(0);
  const [dataResults, setDataResults] = useState([]);
  const [blackTheme, setBlackTheme] = useState(false);
  const [open, setMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  const handleThemeChanging = (value) => {
    if (value === 'black') {
      setBlackTheme(true);
      document.querySelector('body').classList.add('black-bg');
    }
    else if (value === 'white') {
      setBlackTheme(false);
      document.querySelector('body').classList.remove('black-bg');
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    axios.get(`https://api.github.com/search/repositories?q=${searchValue}`)
      .then((response) => {
        const { data } = response;
        setTotalCount(data.total_count);
        setDataResults(data.items);
      })
      .catch((error) => (error))
      .finally(() => {
        setMessage(true);
        setLoading(false);
      });
  };

  return (
    <div className="app">
      <img className="app-github-img" src={githubLogo} alt="github logo" />
      <ConditionnalBtn handleThemeChanging={handleThemeChanging} blackTheme={blackTheme} />
      <SearchBar
        value={searchValue}
        handleSearchChange={handleSearchChange}
        handleSubmit={handleSubmit}
      />
      {loading && <LoaderComp blackTheme={blackTheme} />}
      {open && <Messages totalNbr={totalCount} blackTheme={blackTheme} />}
      {open && <CardList dataResults={dataResults} />}
    </div>
  );
};

// == Export
export default App;
