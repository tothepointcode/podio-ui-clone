import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const StyledText = styled.Text`
    color: blue;
    padding: 15px;
    background-color: black;
`;

const Login = ({navigation}) => {

  return (
    <View>
      <Text>Login Page</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <StyledText>Login</StyledText>
        </TouchableOpacity>
    </View>
  );
};

export default Login;
