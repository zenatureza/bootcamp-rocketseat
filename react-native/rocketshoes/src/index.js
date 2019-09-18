import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import Routes from './routes';

import './config/ReactotronConfig';

import NavigationService from './services/navigation';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      {/* changes os status bar style (battery, wifi etc..) */}
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
      <Routes
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </Provider>
  );
};

export default App;
