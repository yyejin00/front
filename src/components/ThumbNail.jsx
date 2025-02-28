import {View, Text, Image} from 'react-native';
import React from 'react';

const ThumbNail = ({Title, PostType, Like}) => {
  return (
    <View>
      <Image />
      <Text>{Title}</Text>
      <Text>{PostType}</Text>
      <Text>{Like}</Text>
    </View>
  );
};

export default ThumbNail;
