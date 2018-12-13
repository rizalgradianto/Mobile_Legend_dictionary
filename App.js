
import React from 'react';
import {TabNavigator} from 'react-navigation';

import {Home} from './components/home';
import {Heroes} from './components/heroes';
import {Settings} from './components/settings';

const Tab = TabNavigator({
  Home: {
    screen: Home,
  },
  Heroes: {
    screen: Heroes,
  },
  Settings: {
    screen: Settings,
  }
},{
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions:{
    activeTintColor: '#f8f8f8',
    activeBackgroundColor: '#fff',
    inactiveTintColor: '#1234',
    style:{
      backgroundColor:'#286680',
    },

    labelStyle: {
      fontSize: 10,
      color: 'white',
      padding: 5,
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Tab/>
    );
  }
}