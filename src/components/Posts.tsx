import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import PostItem from './PostItem';
import TradePost from './TradePost';

const postsInfo = [
  {
    postTitle: 'Kim',
    postPersonImage: require('../../assets/images/userProfile.jpeg'),
    postImage: require('../../assets/images/post1.jpeg'),
    likes: 765,
  },
  {
    postTitle: 'Lee',
    postPersonImage: require('../../assets/images/profile5.jpeg'),
    postImage: require('../../assets/images/post2.jpeg'),
    likes: 333,
  },
];

const tradeInfo = [
  {
    postTitle: 'Trading 1',
    postPersonImage: require('../../assets/images/profile1.jpeg'),
    postImage: require('../../assets/images/post3.jpeg'),
    likes: 3,
    price: 20000,
  },
  {
    postTitle: 'Trading 2',
    postPersonImage: require('../../assets/images/profile2.jpeg'),
    postImage: require('../../assets/images/post4.jpeg'),
    likes: 5,
    price: 30000,
  },
];

const styles = StyleSheet.create({
  View: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    position: 'relative',
  },

  TextInput: {
    width: '90%',
    height: 40,
    backgroundColor: '#ebebeb',
    fontSize: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
  },

  BigView: {
    marginBottom: 50,
  }
})

const Posts = () => {
  return (
    <View style={styles.BigView}>
      <View style={styles.View} >
        <TextInput placeholder='카테고리 검색' style={styles.TextInput} />
      </View>
      {postsInfo.map((data, index) => {
        return (
          <View>
            <PostItem key={index} data={data} />
          </View>  
        )
      })}
      {tradeInfo.map((data, index) => {
        return (
          <View>
            <TradePost key={index} data={data} />
          </View>
        )
      })}
    </View>
  )
}

export default Posts;
