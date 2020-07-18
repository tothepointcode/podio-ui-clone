import * as React from 'react';
// React nav
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import Other from './../screens/Other';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Search" component={Other} />
      <Tab.Screen name="Share" component={Other} />
      <Tab.Screen name="Settings" component={Other} />
    </Tab.Navigator>
  );
};

export default TabStack;
