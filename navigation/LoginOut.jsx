import {View, Text} from 'react-native';
import React from 'react';
import SignIn from '../src/pages/LoginOut/SignIn';
import SignUp from '../src/pages/LoginOut/SignUp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const LoginOut = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{title: '로그인'}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{title: '회원가입'}}
      />
    </Stack.Navigator>
  );
};

export default LoginOut;
