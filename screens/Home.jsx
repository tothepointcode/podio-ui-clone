import * as React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { MainView, colors, SubsTitle, SubsChannel } from './../components/styles';
const { primary, gray, secondary, light, tertiary, alternate } = colors;

// icons
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const StyledRow = styled.ScrollView`
  margin-vertical: 20px;
`;

const Tile = styled.View`
  width: 135px;
  height: 135px;
  background-color: ${(props) => props.color || primary};
  margin-right: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
`;

const StyledImage = styled.Image`
  width: 135px;
  height: 135px;
  margin-right: 20px;
  border-radius: 100px;
  resize-mode: cover;
`;

const SubscribedItem = styled.View`
  width: 135px;
  margin-right: 20px;
`;

const TileIcon = styled.Text`
  color: ${light};
  padding: 5px;
`;
const TileText = styled.Text`
  color: ${light};
  font-size: 20px;
  font-weight: bold;
`;

const SectionTitle = styled.Text`
  color: ${gray};
  font-size: 25px;
  font-weight: bold;
`;

const firstSection = [
  { name: 'Trending', color: secondary, icon: <MaterialCommunityIcons size={24} name="trending-up" color={light} /> },
  { name: 'Games', color: tertiary, icon: <Ionicons name="logo-game-controller-b" size={24} color={light} /> },
  { name: 'Tech', color: alternate, icon: <MaterialCommunityIcons size={24} name="ipod" color={light} /> },
];

const secondSection = [
  {
    image: require('./../assets/pattern1.png'),
    title: 'The Reason Behind Polars',
    channel: 'Paul Finn',
    duration: 180,
    theme: secondary,
  },
  {
    image: require('./../assets/pattern2.png'),
    title: 'Basics of Shapes',
    channel: 'Design Daily',
    duration: 5036,
    theme: alternate,
  },
  {
    image: require('./../assets/pattern3.png'),
    title: 'Meeting with the company',
    channel: 'UX Daily',
    duration: 4546,
    theme: tertiary,
  },
];

const thirdSection = [
  { image: require('./../assets/pic1.jpg') },
  { image: require('./../assets/pic2.jpg') },
  { image: require('./../assets/pic3.jpg') },
];

const Home = ({ navigation }) => {
  return (
    <MainView>
      <StyledRow contentContainerStyle={{ alignItems: 'center' }} horizontal>
        {firstSection.map(({ color, name, icon }, index) => {
          return (
            <Tile key={index} color={color}>
              <TileIcon>{icon}</TileIcon>
              <TileText>{name}</TileText>
            </Tile>
          );
        })}
      </StyledRow>
      <SectionTitle>Subscribed</SectionTitle>
      <StyledRow horizontal>
        {secondSection.map((item, index) => {
          const { image, title, channel } = item;
          return (
            <TouchableOpacity key={index} onPress={() => navigation.navigate('Details', { ...item })}>
              <SubscribedItem>
                <Image style={{ width: 135, height: 135, borderRadius: 25 }} source={image} />
                <SubsTitle numberOfLines={1}>{title}</SubsTitle>
                <SubsChannel>{channel}</SubsChannel>
              </SubscribedItem>
            </TouchableOpacity>
          );
        })}
      </StyledRow>
      <SectionTitle>Top Channels</SectionTitle>

      <StyledRow horizontal>
        {thirdSection.map(({ image }, index) => {
          return <StyledImage key={index} source={image} />;
        })}
      </StyledRow>
    </MainView>
  );
};

export default Home;
