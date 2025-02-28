import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  /* Hot 게시글 타이틀 */
  TextInput: {
    width: '98%',
    backgroundColor: '#ebebeb',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    padding: 4,
    paddingLeft: 20,
  },

  /* 검색창 아이콘 */
  Ionic: {
    fontSize: 18,
    opacity: 0.7,
    position: 'absolute',
    zIndex: 1,
    right: 20,
  },

  /* Hot 게시글 타이틀 */
  View: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    position: 'relative',
  },
});


const SearchInput = () => {
  return (
    <View style={styles.View}>
      <TextInput placeholder='Search' placeholderTextColor="#909090" style={styles.TextInput} />
      <Ionic name="search" style={styles.Ionic} />
    </View>
  )
}

export default SearchInput;
