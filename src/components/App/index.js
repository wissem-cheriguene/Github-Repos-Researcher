// == Import npm
import React from 'react';

// == Import
import githubLogo from './GitHub-logo.png';
import './styles.css';
// == Composant
const App = () => (
  <div className="app">
    <img src={githubLogo} alt="github logo" />
    <div className="">RepoResults</div>
    <div className="">Message</div>
  </div>
);

// == Export
export default App;
