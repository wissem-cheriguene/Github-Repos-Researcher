import React from 'react';
import { Button } from 'semantic-ui-react';

const CondidtionnalBtn = ({ handleThemeChanging, blackTheme }) => (
  <Button.Group>
    <Button inverted={blackTheme} onClick={() => handleThemeChanging('black')}>Thème sombre</Button>
    <Button.Or />
    <Button positive onClick={() => handleThemeChanging('white')}>Thème clair</Button>
  </Button.Group>
);

export default CondidtionnalBtn;
