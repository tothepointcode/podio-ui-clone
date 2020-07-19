import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import { MainView, colors } from './../components/styles';

const { primary, gray, secondary, light, tertiary, alternate } = colors;

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
  { name: 'Trending', color: secondary, icon: '' },
  { name: 'Games', color: tertiary, icon: '' },
  { name: 'Tech', color: alternate, icon: '' },
];

const Home = () => {
  return (
    <MainView>
      <StyledRow contentContainerStyle={{ alignItems: 'center' }} horizontal>
        {firstSection.map(({ color, name, icon }, index) => {
          return (
            <Tile key={index} color={color}>
              <TileIcon>Icon</TileIcon>
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
        {/* <Tile>
          <TileIcon>Icon</TileIcon>
          <TileText>Trending</TileText>
        </Tile> */}
      </StyledRow>
    </MainView>
  );
};

export default Home;
