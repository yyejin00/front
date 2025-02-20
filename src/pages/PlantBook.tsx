import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import HotPlant from '../components/HotPlant';

const PlantBook = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.TitleText}>
          식 물 도 감
        </Text>
        <View style={styles.InputContainer}>
          <TextInput placeholder='찾으려는 식물 이름' style={styles.TextInput} />
        </View>
      </View>
      <View style={styles.HotPlant}>
          <HotPlant />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },

  TitleText: {
    color: 'green',
    fontSize: 30,
    fontWeight: 'bold',
  },

  InputContainer: {
    paddingTop: 30,
    width: '80%',
  },

  TextInput: {
    paddingLeft: 15,
    height: 35,
    fontSize: 11,
    borderWidth: 0.5,
    borderColor: '#989898',
    borderRadius: 10,
  },

  HotPlant: {
    position: 'absolute',
    top: 410,
  },
});

export default PlantBook;
