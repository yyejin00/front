import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './KiwoomMain';
import PlantNew from './KimwoomNew';
import PlantDetail from './KiwoomDetail';

const Kiwoomee = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PlantDetail"
        component={PlantDetail}
        options={{headerShown: true, headerBackVisible: true}}
      />
      <Stack.Screen name="PlantNew" component={PlantNew} options={{}} />
    </Stack.Navigator>
  );
};

export default Kiwoomee;
