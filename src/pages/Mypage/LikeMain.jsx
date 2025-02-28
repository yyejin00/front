import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const LikeMain = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>👈</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  text: {
    fontSize: 20,
  },
});

export default LikeMain;
