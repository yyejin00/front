import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home';
import Kiwwoomee from './src/pages/Kiwoomee';
import PlantBook from './src/pages/PlantBook';
import MyPage from './src/pages/Mypage';
import {useState} from 'react';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import {View} from 'react-native';

export type LoggedInParamList = {
  Orders: undefined;
  Settings: undefined;
  Delivery: undefined;
  Complete: {orderId: string};
};

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="Kiwwoomee"
            component={Kiwwoomee}
            options={{title: '내 키우미'}}
          />
          <Tab.Screen
            name="PlantBook"
            component={PlantBook}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="MyPage"
            component={MyPage}
            options={{headerShown: false}}
          />
        </Tab.Navigator>
      ) : (
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
      )}
    </NavigationContainer>
  );
}

export default App;
