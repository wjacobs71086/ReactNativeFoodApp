import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen'


const navigator = createStackNavigator({
  Search: SearchScreen,
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
})


export default createAppContainer(navigator);
// Client ID
// aWszA-Z1dfQ6e55iIopcBw

// API Key
// kbAKytAKcOslKFBrdl5jz47FuSz-0qY26ANNXb2B-BS6mNhw9cwup2I5zx53Xy0twMiFVpeTKUPPOLIXaoUclyIsE4r8UfObJ7QZvLVu6TEGX1lxdLhFcCgT9YBAXnYx
