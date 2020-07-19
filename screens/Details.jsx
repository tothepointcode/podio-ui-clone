import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

// Custom imports
import { MainView, colors, SubsTitle, SubsChannel, deviceHeight, deviceWidth } from './../components/styles';
const { light, gray } = colors;
import { calculateTime } from './../components/sharedMethods';

// Icons
import { Ionicons } from '@expo/vector-icons';

// Slider
import Slider from '@react-native-community/slider';

// Bottom drawer
import BottomDrawer from 'rn-bottom-drawer';

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

// Bottom
const BottomImage = styled.Image`
  height: ${0.2 * deviceWidth}px;
  width: ${0.2 * deviceWidth}px;
  padding: 20px;
  border-radius: 25px;
`;

const BottomRow = styled.View`
  padding: 40px;
  padding-top: 0px;
  flex-direction: row;
  justify-content: flex-start;
`;

const BottomDetailsView = styled.View`
  padding: 20px;
  padding-top: 0px;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: -15px;
`;

const Bar = styled.View`
  height: 3px;
  width: 100px;
  background-color: ${gray};
  position: absolute;
  right: ${(deviceWidth - 100) / 2}px;
  left: ${(deviceWidth - 100) / 2}px;
  top: 10px;
  border-radius: 25px;
`;

const Details = ({ route, navigation }) => {
  const { image, title, channel, duration, theme, allData, index } = route.params;

  const [value, setValue] = useState('00:00');
  const [mValue, _] = useState(calculateTime(duration));
  const [play, setPlay] = useState(false);

  const adjustTime = (val) => {
    const valueOfDuration = val * duration;
    setValue(calculateTime(valueOfDuration));
  };

  // Bottom drawer
  const TAB_BAR_HEIGHT = 89;

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

      <BottomDrawer
        padding={20}
        backgroundColor="#161616"
        useNativeDriver="true"
        containerHeight={250}
        roundedEdges={true}
        offset={TAB_BAR_HEIGHT}
        startUp={false}
      >
        <Text
          style={{ textAlign: 'left', fontWeight: 'bold', fontSize: 22, color: light, padding: 20, paddingLeft: 45 }}
        >
          Downloads
        </Text>
        <Bar />
        {allData.length &&
          allData.map((item, id) => {
            if (index !== id) {
              const { image, title, channel } = item;
              return (
                <TouchableOpacity onPress={() => navigation.navigate('Details', { ...item, index: id, allData })}>
                  <BottomRow>
                    <BottomImage source={image} />
                    <BottomDetailsView>
                      <SubsTitle>{title}</SubsTitle>
                      <SubsChannel>{channel}</SubsChannel>
                    </BottomDetailsView>
                  </BottomRow>
                </TouchableOpacity>
              );
            }
          })}
      </BottomDrawer>
    </MainView>
  );
};

export default Details;
