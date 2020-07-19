import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

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
