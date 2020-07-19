import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { MainView, colors } from './../components/styles';
const { light, tertiary } = colors;

const StyledView = styled(MainView)`
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.TouchableOpacity`
  background-color: ${tertiary};
  padding: 12px;
  border-radius: 30px;
  margin-vertical: 10px;
`;

const ButtonText = styled.Text`
  color: ${light};
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;

// Auth context
import { AuthContext } from './../navigators/AppStack';

const Other = () => {
  const { _, setAuthenticated } = useContext(AuthContext);

  return (
    <StyledView>
      <Text style={{ color: light }}>Extra Page</Text>
      <StyledButton onPress={() => setAuthenticated(false)}>
        <ButtonText>Log Out</ButtonText>
      </StyledButton>
    </StyledView>
  );
};

export default Other;
