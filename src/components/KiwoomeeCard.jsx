import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const KiwoomeeCard = ({data}) => {
  const Navigation = useNavigation();

  return (
    <View style={styles.Card}>
      <TouchableOpacity
        style={styles.CardContainer}
        onPress={() => Navigation.navigate('PlantDetail')}>
        <Image style={styles.Image} source={{uri: data.image}} />
        <Text style={styles.Text}>{data.name}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  Card: {},
  CardContainer: {
    width: 180,
    height: 200,
    padding: 10,
    //borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 1,
  },
  Image: {
    width: 130,
    height: 150,
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'white',
  },
  Text: {fontSize: 15},
});

export default KiwoomeeCard;
