import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Likes from '../src/pages/Mypage/Likes';
import BookMark from '../src/pages/Mypage/BookMark';
const Tab = createMaterialTopTabNavigator();
const LikeTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {fontSize: 12},
        style: {backgroundColor: 'blue'},
      }}>
      <Tab.Screen name="BookMark" component={BookMark} />
      <Tab.Screen name="Likes" component={Likes} />
    </Tab.Navigator>
  );
};

export default LikeTab;
