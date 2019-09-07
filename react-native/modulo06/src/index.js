import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

import './config/ReactotronConfig';

const App = () => {
  return (
    <>
      {/* changes os status bar style (battery, wifi etc..) */}
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
};

export default App;
