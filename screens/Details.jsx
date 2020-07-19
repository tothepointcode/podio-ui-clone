import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';

import { MainView, colors, SubsTitle, SubsChannel } from './../components/styles';
const { secondary, light } = colors;

import { Ionicons } from '@expo/vector-icons';

// Slider
import Slider from '@react-native-community/slider';

const CircularImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 500px;
`;

const Wheel = styled.View`
  height: 50%;
  padding: 10px;
  border-radius: 500;
  border-width: 10px;
  border-color: ${(props) => props.theme};
`;

const DetailsView = styled.View`
  align-items: center;
  padding-vertical: 20px;
`;

const DetailsSubsTitle = styled(SubsTitle)`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

const DetailsSubsChannel = styled(SubsChannel)`
  text-align: center;
  font-size: 21px;
  margin-top: -10px;
`;

const Details = ({ route }) => {
  const { image, title, channel, duration, theme } = route.params;

  return (
    <MainView>
      <Wheel theme={theme}>
        <CircularImage source={image} />
      </Wheel>
      <DetailsView>
        <DetailsSubsTitle>{title}</DetailsSubsTitle>
        <DetailsSubsChannel>{channel}</DetailsSubsChannel>
      </DetailsView>
      <DetailsView style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Ionicons name="ios-skip-backward" size={35} color={light} />
        <Ionicons name="ios-play" size={45} color={light} />
        <Ionicons name="ios-skip-forward" size={35} color={light} />
      </DetailsView>
      <DetailsView style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: light }}>44:36</Text>
        <Text style={{ color: light }}>56:23</Text>
      </DetailsView>
      <DetailsView>
        <Slider
          style={{ width: '100%', height: 40 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={theme}
          maximumTrackTintColor={light}
        />
      </DetailsView>
    </MainView>
  );
};

export default Details;
