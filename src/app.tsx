/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';
export interface AppProps {
  name: string;
}

export const App: React.FunctionComponent<AppProps> = function () {
  return (
    <div data-testid="app">
      <div
        css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
        `}
      >
        {[1, 2, 3, 4, 5].map((x) => (
          <h1
            css={css`
              &:hover {
                color: var(--demo, #fff);
              }
            `}
            key={x}
          >
            {x}
          </h1>
        ))}
      </div>
    </div>
  );
};

App.defaultProps = {
  name: 'World',
};

App.propTypes = {
  name: PropTypes.string.isRequired,
};
