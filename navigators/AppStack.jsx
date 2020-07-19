import * as React from 'react';
// React nav
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Login from './../screens/Login';
import Details from './../screens/Details';
import TabStack from './TabStack';
import StyledTitle from './../components/StyledTitle';
import { SimpleLineIcons } from '@expo/vector-icons';

// Custom styles
import { colors } from './../components/styles';

const Stack = createStackNavigator();

const authenticated = false;

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
      {authenticated && (
        <>
          <Stack.Screen options={{ headerShown: false }} name="TabStack" component={TabStack} />
          <Stack.Screen
            options={{
              title: '',
              headerRight: (props) => <SimpleLineIcons name="options-vertical" size={20} color={light} />,
              headerRightContainerStyle: {
                paddingRight: 20,
              },
            }}
            name="Details"
            component={Details}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppStack;
