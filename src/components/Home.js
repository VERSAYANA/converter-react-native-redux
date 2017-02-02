import { StackNavigator } from 'react-navigation';
import { TabNavigator, TabView } from 'react-navigation';
import LengthContainer from '../containers/LengthContainer';
import MassContainer from '../containers/MassContainer';
import PressureContainer from '../containers/PressureContainer';
import TimeContainer from '../containers/TimeContainer';

const Home = TabNavigator({
  Length: { screen: LengthContainer },
  Mass: { screen: MassContainer },
  Pressure: { screen: PressureContainer },
  Time: { screen: TimeContainer },
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    upperCaseLabel: false,
    activeTintColor: 'black',
    inactiveTintColor: '#757575',
    pressColor: '#9E9E9E',
    style: {
      backgroundColor: 'white',
    },
    tabStyle: {
    },
    indicatorStyle: {
      backgroundColor: 'black',
    },
  },
  // swipeEnabled: false,
});

export default Home;
