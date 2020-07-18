import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

// Icons
import { FontAwesome } from '@expo/vector-icons';

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

const StyledTitle = ({ tintColor }) => {
  return (
    <TitleView>
      <FontAwesome style={{ transform: [{rotate: "49deg"}] }} name="pause-circle" size={34} color={tintColor} />
      <Title style={{ color: tintColor }}>Podio</Title>
    </TitleView>
  );
};

const Styles = StyleSheet.create({
    title: {

    }
})

export default StyledTitle;
