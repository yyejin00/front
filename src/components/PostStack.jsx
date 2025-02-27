import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import PostUpload from './PostUpload';
import FloatButton from './FloatButton';

const Stack = createNativeStackNavigator();

function PostStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PostUpload" component={PostUpload} />
        <Stack.Screen name='FloatButton' component={FloatButton} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default PostStack;
