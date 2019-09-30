import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

/* receveing all AuthLayout component childrens (h1 and h2)
   e.g.:  <AuthLayout>
            <h2>tchau</h2>
            <h1>oi<h1>
          </AuthLayout>
*/
export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
