import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

import Header from '~/components/Header';

/* receveing all DefaultLayout component children (h1 and h2)
   e.g.:  <DefaultLayout>
            <h2>tchau</h2>
            <h1>oi<h1>
          </DefaultLayout>
*/
export default function DefaultLayout({ children }) {
  console.tron.log('> defaultLayout....');

  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
