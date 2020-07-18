import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

export const colors = {
  primary: '#000000',
  secondary: '#6147ff',
  tertiary: '#6147ff',
  alternate: '#6147ff',
  light: '#ffffff',
};

export const MainView = styled.View`
  background-color: ${colors.primary};
  padding-horizontal: 20px;
  flex: 1;
`;
