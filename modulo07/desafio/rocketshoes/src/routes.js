import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';

const Routes = createAppContainer(
  createStackNavigator(
    { Home, Cart },
    {
      headerLayoutPreset: 'left',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        header: Header,
      },
    }
  )
);

export default Routes;
