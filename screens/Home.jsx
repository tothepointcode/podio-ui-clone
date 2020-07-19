import * as React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import styled from 'styled-components/native';

import { MainView, colors } from './../components/styles';
const { primary, gray, secondary, light, tertiary, alternate } = colors;

// icons
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const StyledRow = styled.ScrollView`
  margin-vertical: 20px;
  height: 100%;
`;

const Tile = styled.View`
  width: 135px;
  height: 135px;
  background-color: ${(props) => props.color};
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

const thirdSection = [
  { image: require('./../assets/pic1.jpg') },
  { image: require('./../assets/pic2.jpg') },
  { image: require('./../assets/pic3.jpg') },
];

const Home = () => {
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
        {/* <Tile>
          <TileIcon>Icon</TileIcon>
          <TileText>Trending</TileText>
        </Tile> */}
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
