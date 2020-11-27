import React from 'react';
import { Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Messages = ({ totalNbr, blackTheme }) => {
  let result = '';
  if (totalNbr < 2) {
    result = `La recherche a donnée ${totalNbr} resultat`;
  }
  else {
    result = `La recherche a donnée ${totalNbr} resultats`;
  }
  let color = false;
  if (blackTheme === true) {
    color = 'black';
  }
  return (
    <Message content={result} color={color} />
  );
};

Messages.propTypes = {
  totalNbr: PropTypes.number.isRequired,
  blackTheme: PropTypes.bool.isRequired,
};
export default Messages;
