import * as React from 'react';
// React nav
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Login from './../screens/Login';
import TabStack from './TabStack';
import StyledTitle from './../components/StyledTitle';
import StyledAvatar from './../components/StyledAvatar';

// Custom styles
import { colors } from './../components/styles';

const Stack = createStackNavigator();

const authenticated = true;

const AppStack = () => {
  const { primary, light } = colors;
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
      {!authenticated && (
        <Stack.Screen
          options={{
            headerTitle: (props) => <StyledTitle {...props} />,
          }}
          name="Login"
          component={Login}
        />
      )}
      {authenticated && <Stack.Screen options={{ headerShown: false }} name="TabStack" component={TabStack} />}
    </Stack.Navigator>
  );
};

export default AppStack;
