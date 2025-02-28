import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Kiwwoomee from './src/pages/Kiwoomee';
import MyPage from './src/pages/Mypage';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import {useSelector} from 'react-redux';
import PlantStack from './src/components/PlantStack';
import PostStack from './src/components/PostStack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AppInner() {
  //const [isLoggedIn, setLoggedIn] = useState(true);
  const isLoggedIn = useSelector(state => !state.user.email);
  return isLoggedIn ? (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={PostStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Kiwwoomee"
        component={Kiwwoomee}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="PlantBook"
        component={PlantStack}
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
  );
}

export default AppInner;
