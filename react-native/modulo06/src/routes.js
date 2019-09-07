import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Main from './pages/Main';
import User from './pages/User';
import Repository from './pages/Repository';

// Routes is a component
const Routes = createAppContainer(
  createStackNavigator(
    { Main, User, Repository },
    {
      headerLayoutPreset: 'center',
      // only displays return arrow (without 'voltar')
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
