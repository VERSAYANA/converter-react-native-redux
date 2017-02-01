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
  tabBarOptions: {
    upperCaseLabel: false,
    style: {
      // justifyContent: 'center',
      // alignItems: 'center',
      // alignContent: 'center'
    }
  }
});

export default Home;
