import React from 'react';
import MainTab from './Tab';
import LikeTab from './LikeTab';
import PostUpload from '../src/pages/Home/Board/PostUpload';
import Search from '../src/pages/Home/Search/Search';
import KiwoomeeNew from '../src/pages/Kiwoomee/KiwoomeeNew';
import KiwoomeeDetail from '../src/pages/Kiwoomee/KiwoomDetail';
import PlantBookDetail from '../src/pages/PlantBook/PlantBookDetail';
import LikeMain from '../src/pages/Mypage/LikeMain';
import QnA from '../src/pages/Mypage/QnA';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainTab}
        options={{headerShown: false}}
      />
      {/*       <Stack.Screen
        name="LikeTab"
        component={LikeTab}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="PostUpload"
        component={PostUpload}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="KiwoomeeNew"
        component={KiwoomeeNew}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="KiwoomeeDetail"
        component={KiwoomeeDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PlantBookDetail"
        component={PlantBookDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LikeMain"
        component={LikeMain}
        options={{headerShown: false}}
      />
      <Stack.Screen name="QnA" component={QnA} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default MainStack;
