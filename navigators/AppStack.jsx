import * as React from 'react';
// React nav
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Login from './../screens/Login';

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}

export default AppStack;