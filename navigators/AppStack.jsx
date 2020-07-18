import * as React from 'react';
// React nav
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Login from './../screens/Login';
import TabStack from './TabStack';
import StyledTitle from './../components/StyledTitle';

// Custom styles
import { colors } from './../components/styles';

const Stack = createStackNavigator();

const AppStack = () => {
  const { primary, light } = colors;
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: primary,
        },
        headerTintColor: light,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        options={{
          headerTitle: (props) => <StyledTitle {...props} />,
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen name="TabStack" component={TabStack} />
    </Stack.Navigator>
  );
};

export default AppStack;
