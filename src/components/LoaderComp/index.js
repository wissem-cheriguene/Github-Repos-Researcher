import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimmer,
  Loader,
  Image,
  Segment,
} from 'semantic-ui-react';
import shortParagraph from './short-paragraph.png';

const LoaderComp = ({ blackTheme }) => (
  <Segment inverted={blackTheme}>
    <Dimmer inverted={!blackTheme} active>
      <Loader size="massive">Loading</Loader>
    </Dimmer>

    <Image src={shortParagraph} />
    <Image src={shortParagraph} />
    <Image src={shortParagraph} />
  </Segment>
);

LoaderComp.propTypes = {
  blackTheme: PropTypes.bool.isRequired,
};
export default LoaderComp;
