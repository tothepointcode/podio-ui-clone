import * as React from 'react';
// React nav
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Home from './../screens/Home';
import Details from './../screens/Details';
import StyledTitle from './../components/StyledTitle';
import StyledAvatar from './../components/StyledAvatar';

import { colors} from './../components/styles';
const {primary, light} = colors;

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: primary,
          height: 110,
        },
        headerTintColor: light,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        options={{
          headerTitle: (props) => <StyledTitle {...props} authenticated />,
          headerRight: (props) => <StyledAvatar />,
          headerRightContainerStyle: {
            paddingRight: 20,
          },
          headerTitleContainerStyle: {
            paddingLeft: 5
          }
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default HomeStack;
