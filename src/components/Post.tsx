import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostUpload from '../pages/PostUpload';
import Chat from '../pages/Chat';

const Stack = createNativeStackNavigator();

const Post = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="PostUpload" component={PostUpload} />
            <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Post;
