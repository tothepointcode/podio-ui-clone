import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { MainView, colors, SubsTitle, SubsChannel, deviceHeight, deviceWidth } from './../components/styles';
const { light } = colors;
import { calculateTime } from './../components/sharedMethods';

import { Ionicons } from '@expo/vector-icons';

// Slider
import Slider from '@react-native-community/slider';

const CircularImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 500px;
`;

const Wheel = styled.View`
  height: ${0.9 * deviceWidth}px;
  width: ${0.9 * deviceWidth}px;
  padding: 20px;
  border-radius: 500px;
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

  const [value, setValue] = useState('00:00');
  const [mValue, _] = useState(calculateTime(duration));
  const [play, setPlay] = useState(false);

  const adjustTime = (val) => {
    const valueOfDuration = val * duration;
    setValue(calculateTime(valueOfDuration));
  };

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
        <TouchableOpacity onPress={() => setPlay(!play)}>
          {!play && <Ionicons name="ios-play" size={45} color={light} />}
          {play && <Ionicons name="ios-pause" size={45} color={light} />}
        </TouchableOpacity>
        <Ionicons name="ios-skip-forward" size={35} color={light} />
      </DetailsView>
      <DetailsView style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
        <Text style={{ color: light }}>{value}</Text>
        <Text style={{ color: light }}>{mValue}</Text>
      </DetailsView>
      <DetailsView>
        <Slider
          style={{ width: '100%', height: 10, paddingHorizontal: -20 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={theme}
          maximumTrackTintColor={light}
          thumbTintColor={light}
          onValueChange={(val) => adjustTime(val)}
        />
      </DetailsView>
    </MainView>
  );
};

export default Details;
