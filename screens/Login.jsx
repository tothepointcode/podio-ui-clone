import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { MainView, colors } from './../components/styles';

const { primary, light, secondary } = colors;

const StyledText = styled.Text`
  color: blue;
  padding: 15px;
  background-color: black;
`;

const SubView = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding-bottom: 30px;
`;

const IntroText = styled.Text`
  color: ${light};
  font-size: 41px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const StyledButton = styled.TouchableOpacity`
  background-color: ${(props) => (props.transparent ? primary : secondary)};
  padding: 12px;
  border-radius: 30px;
  border: ${(props) => (props.bordered ? '3px solid ' + light : 0)};
  margin-vertical: 10px;
`;

const ButtonText = styled.Text`
  color: ${light};
  text-align: center;
  font-weight: bold;
  font-size: 25px;
`;

const Login = ({ navigation }) => {
  return (
    <MainView>
      <SubView>
        <IntroText>Listen to all the podcasts you want on your phone.</IntroText>
        <StyledButton>
          <ButtonText>Sign in</ButtonText>
        </StyledButton>
        <StyledButton bordered={true} transparent={true}>
          <ButtonText>Sign in with Twitter</ButtonText>
        </StyledButton>
        <StyledButton bordered={false} transparent={true}>
          <ButtonText>LOG IN</ButtonText>
        </StyledButton>
      </SubView>
    </MainView>
  );
};

export default Login;
