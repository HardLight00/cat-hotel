import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

export default () => <App/>;

// @ts-ignore
export const mount = Component => ReactDOM.render(
  <Component/>,
  document.getElementById('app')
);

export const unmount = () => {
  // @ts-ignore
  ReactDOM.unmountComponentAtNode(document.getElementById('app'));
};

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept('./App.tsx', () => {
    ReactDOM.render(
      <App/>,
      document.getElementById('app')
    );
  });
}
