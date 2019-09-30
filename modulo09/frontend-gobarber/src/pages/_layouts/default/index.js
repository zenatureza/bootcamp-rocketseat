import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

/* receveing all AuthLayout component childrens (h1 and h2)
   e.g.:  <AuthLayout>
            <h2>tchau</h2>
            <h1>oi<h1>
          </AuthLayout>
*/
export default function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
