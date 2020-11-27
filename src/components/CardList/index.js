import React from 'react';
import { Grid, Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const CardList = ({ dataResults }) => (
  <Grid doubling columns={3}>
    {
      dataResults.map((item) => (
        <Grid.Column key={item.node_id}>
          <Card
            image={item.owner.avatar_url}
            header={item.name}
            meta={item.owner.login}
            description={item.description}
          />
        </Grid.Column>
      ))
    }
  </Grid>
);

CardList.propTypes = {
  dataResults: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};
export default CardList;
