import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

// Icons
import { FontAwesome } from '@expo/vector-icons';

import { colors } from './styles';

const Title = styled.Text`
  padding-left: 10px;
  font-size: 23px;
  font-weight: bold;
`;

const TitleView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const AuthTitleView = styled.View`
  flex: 1;
`;

const AuthTitle = styled.Text`
  font-size: 27px;
  font-weight: bold;
`;

const AuthDate = styled.Text`
  font-weight: bold;
  color: ${colors.gray};
`;

// Fetching date
const fetchDate = () => {
  const date = new Date();
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dateString = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  return dateString;
};

const StyledTitle = ({ tintColor, authenticated }) => {
  return (
    <>
      {!authenticated && (
        <TitleView>
          <FontAwesome style={{ transform: [{ rotate: '49deg' }] }} name="pause-circle" size={34} color={tintColor} />
          <Title style={{ color: tintColor }}>Podio</Title>
        </TitleView>
      )}
      {authenticated && (
        <AuthTitleView>
          <AuthTitle style={{ color: tintColor }}>Hey Alex, </AuthTitle>
          <AuthDate>{fetchDate()}</AuthDate>
        </AuthTitleView>
      )}
    </>
  );
};

export default StyledTitle;
