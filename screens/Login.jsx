import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { MainView } from './../components/styles';

const StyledText = styled.Text`
  color: blue;
  padding: 15px;
  background-color: black;
`;

const Login = ({ navigation }) => {
  return (
    <MainView>
      <Text>Login Page</Text>
      <TouchableOpacity onPress={() => navigation.navigate('TabStack')}>
        <StyledText>Login</StyledText>
      </TouchableOpacity>
    </MainView>
  );
};

export default Login;
