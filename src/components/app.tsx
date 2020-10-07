/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import React from 'react';
import phoneImg from '../../public/assets/icons/phone-receiver.png';
import bigImg from '../../public/assets//images/xps-DYAf-8UTFN8-unsplash.jpg';
import anotherBigImg from '../../public/assets//images/xps-DYAf-8UTFN8-unsplash.jpeg';
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
        <img src={bigImg} alt=""></img>
        <img src={anotherBigImg} alt=""></img>
        <img src={phoneImg} alt=""></img>
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
