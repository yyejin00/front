import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import PostUpload from '../pages/PostUpload';

const Stack = createNativeStackNavigator();

function PostStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PostUpload"
          component={PostUpload}
        />
      </Stack.Navigator>
  );
}

export default PostStack;
