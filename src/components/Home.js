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
    activeTintColor: '#00BCD4',
    style: {
      backgroundColor: 'black',
    },
    tabStyle: {
    },
    indicatorStyle: {
      backgroundColor: '#00BCD4',
    },
  }
});

export default Home;
