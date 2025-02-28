import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HotPlantScreen from '../pages/PlantBook';
import PlantBookDetail from '../pages/PlantBookDetail';

const PlantStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HotPlant"
        component={HotPlantScreen}
        options={{headerShown: false}}
      /> 
      <Stack.Screen
        name="PlantBookDetail"
        component={PlantBookDetail}
        options={{headerShown: true, headerBackVisible: true}}
      />
    </Stack.Navigator>
  );
};

export default PlantStack;
