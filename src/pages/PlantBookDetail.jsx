import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import SearchInput from '../components/SearchInput';

const PlantBookDetail = () => {
  return (
    <View style={styles.container}>
      <SearchInput />
      <ScrollView>
         
      </ScrollView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {

  }
})

export default PlantBookDetail;
