import * as React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

import { MainView, colors } from './../components/styles';

const StyledView = styled(MainView)`
  justify-content: center;
  align-items: center;
`;

const Other = () => {
  return (
    <StyledView>
      <Text style={{ color: colors.light }}>Extra Page</Text>
    </StyledView>
  );
};

export default Other;
