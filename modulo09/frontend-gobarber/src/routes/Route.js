import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// using babel-plugin-root-import (~)
import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';

import store from '~/store';

export default function RouteWrapper({
  // uppercase component because we need to create an <Component />
  component: Component,
  isPrivate,
  // all other variables
  ...rest
}) {
  const { signed } = store.getState().auth;
  console.tron.log('$ Routes.js - signed: ', signed);
  console.tron.log('$ Routes.js - isPrivate: ', isPrivate);

  // redirects user back to login page
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  // defines which component should be rendered
  const Layout = signed ? DefaultLayout : AuthLayout;

  /* copy all variables to Route component
  and passes a function with all props from the screen
  */
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
