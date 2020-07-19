import * as React from 'react';
import { Image } from 'react-native';


const StyledAvatar = () => {
  return (
    <Image style={{width: 50, height: 50, borderRadius: 50}} source={require('./../assets/sampleAvatar.jpg')} />
  );
};

export default StyledAvatar;
