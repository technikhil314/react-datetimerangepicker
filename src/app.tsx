import React from 'react';
import PropTypes from 'prop-types';

interface IProps {
  name: string;
}

export const App: React.FunctionComponent<IProps> = function ({ name }) {
  return <h1 data-testid="app">Hello {name}</h1>;
};

App.defaultProps = {
  name: 'World',
};

App.propTypes = {
  name: PropTypes.string.isRequired,
};
