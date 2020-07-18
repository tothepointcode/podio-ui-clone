import * as React from 'react';
// React nav
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Login from './../screens/Login';
import HomeStack from './HomeStack';

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="HomeStack" component={HomeStack} />
        </Stack.Navigator>
    );
}

export default AppStack;