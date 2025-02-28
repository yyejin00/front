import {View, Text} from 'react-native';
import React from 'react';
import Home from '../src/pages/Home/Home';
import Kiwoomee from '../src/pages/Kiwoomee/Kiwoomee';
import PlantBook from '../src/pages/PlantBook/PlantBook';
import Like from '../src/pages/Mypage/LikeMain';
import Chat from '../src/pages/Chat/Chat';
import MyPage from '../src/pages/Mypage/Mypage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Kiwwoomee"
        component={Kiwoomee}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="PlantBook"
        component={PlantBook}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Chat" component={Chat} options={{headerShown: false}} />
      <Tab.Screen
        name="MyPage"
        component={MyPage}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
