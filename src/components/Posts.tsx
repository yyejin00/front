import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import PostItem from './PostItem';

const postsInfo = [
  {
    postTitle: 'Kim',
    postPersonImage: require('../../assets/images/userProfile.jpeg'),
    postImage: require('../../assets/images/post1.jpeg'),
    likes: 765,
    isLinked: true,
  },
  {
    postTitle: 'Lee',
    postPersonImage: require('../../assets/images/profile5.jpeg'),
    postImage: require('../../assets/images/post2.jpeg'),
    likes: 333,
    isLinked: false,
  },
  {
    postTitle: 'Park',
    postPersonImage: require('../../assets/images/profile4.jpeg'),
    postImage: require('../../assets/images/post3.jpeg'),
    likes: 123,
    isLinked: false,
  },
  {
    postTitle: 'Jeong',
    postPersonImage: require('../../assets/images/profile3.jpeg'),
    postImage: require('../../assets/images/post4.jpeg'),
    likes: 777,
    isLinked: false,
  },
  {
    postTitle: 'Choi',
    postPersonImage: require('../../assets/images/profile2.jpeg'),
    postImage: require('../../assets/images/post5.jpeg'),
    likes: 58,
    isLinked: true,
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
  }
})

const Posts = () => {
  return (
    <View>
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
    </View>
  )
}

export default Posts;
