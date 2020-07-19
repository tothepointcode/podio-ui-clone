import * as React from 'react';
// React nav
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import Other from './../screens/Other';
import HomeStack from './HomeStack';
import { colors } from './../components/styles';
const { primary, secondary, light } = colors;

// Icons
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const { name } = route;
          let iconName;
          if (name === 'Home') {
            iconName = 'home';
          } else if (name === 'Search') {
            iconName = 'search';
          } else if (name === 'Share') {
            iconName = 'send';
          } else if (name === 'Settings') {
            iconName = 'hexagon';
          }
          return <Feather name={iconName} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: secondary,
        inactiveTintColor: light,
        showLabel: false,
        style: {
          height: 70,
          backgroundColor: primary,
          elevation: 0,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Search" component={Other} />
      <Tab.Screen name="Share" component={Other} />
      <Tab.Screen name="Settings" component={Other} />
    </Tab.Navigator>
  );
};

export default TabStack;
