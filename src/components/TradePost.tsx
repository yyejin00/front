import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
    BiggestView: {
        paddingBottom: 30,
    },

    userProfile: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        paddingVertical: 10, 
    },

    boardStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 15,
    },

    likeTouch: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ebebeb',
        borderRadius: 10,
        padding: 10,
        width: 50,
    },

    chatButton: {
        backgroundColor:'black',
        justifyContent: 'flex-end',
        padding: 10,
        borderRadius: 10,
        fontSize: 10,
        color: 'white',
    }
});

const TradePost = ({ data, navigation }) => {
  const [like, setLike] = useState(data.isLiked);
      return (
          <View style={styles.BiggestView}>
              <View style={styles.userProfile}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Image
                          source={data.postPersonImage}
                          style={{ width: 25, height: 25, borderRadius: 100 }}
                      />
                      <View style={{ paddingLeft: 10 }}>
                          <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>
                              {data.postTitle}
                          </Text>
                      </View>
                  </View>
                  <Feather name="more-vertical" style={{ fontSize: 20 }} />
              </View>
              <View
                  style={{ justifyContent: 'center', alignItems: 'center' }}
              >
                  <Image
                      source={data.postImage}
                      style={{ width: '100%', height: 350}}
                  />
              </View>
              <View style={styles.boardStyle}>
                  <View
                      style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                      }}
                  >
                    <TouchableOpacity onPress={() => setLike(prev => !prev)} style={styles.likeTouch}>
                        <AntDesign
                            name={like ? 'heart' : 'hearto'}
                            style={{
                                paddingRight: 10,
                                fontSize: 10,
                                color: like ? 'red' : 'black',
                            }}
                        />
                        <Text style={{ fontSize: 10, color: 'black' }}>
                            {like ? data.likes + 1 : data.likes}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigation('Chat')} >
                        <Text style={styles.chatButton}>
                            채팅하기
                        </Text>
                    </TouchableOpacity>
                  </View>
              </View>
              <View
                style={{
                    paddingHorizontal: 15,

                }}
                >
                <Text
                    style={{
                        color: 'black',
                        fontSize: 15,
                        paddingVertical: 2,
                        paddingBottom: 5,
                    }}
                >
                    {data.price}원
                </Text>
                <Text
                    style={{
                        color: 'black',
                        fontSize: 12,
                        paddingVertical: 2,
                }}
                >
                    게시글 설명글입니다.
                </Text>
  
              </View>
          </View>
        );
};

export default TradePost;
