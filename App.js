import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

// React naviagation
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './navigators/AppStack';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <AppStack />
    </NavigationContainer>
  );
}
