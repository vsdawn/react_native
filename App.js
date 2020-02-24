import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './Components/Home';
import ProfileScreen from './Components/Profile';
import LoginScreen from './Components/Login';
// import PriceScreen from '../android../app../src../component/Price';


const MainNavigator = createStackNavigator({
  Profile: {screen: ProfileScreen},
  Home: {screen: HomeScreen},
  Login: {screen: LoginScreen},
  // Dashboard: {screen: DashboardScreen},


},
{
  initialRouteName: 'Home',
});

const App = createAppContainer(MainNavigator);

export default App;