import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

export const colors = {
  primary: '#000000',
  secondary: '#6147ff',
  tertiary: '#ff4773',
  alternate: '#ff8947',
  light: '#ffffff',
  gray: '#A0AEC0',
};

export const MainView = styled.View`
  background-color: ${colors.primary};
  padding-horizontal: 20px;
  flex: 1;
`;

export const SubsTitle = styled.Text`
  color: ${colors.light};
  width: 100%;
  margin-vertical: 10px;
  font-size: 17px;
`;

export const SubsChannel = styled.Text`
  color: ${colors.gray};
  font-size: 15px;
`;
