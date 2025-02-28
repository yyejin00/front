import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
const MyPage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>마이 페이지</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.Text}>내 키우미</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.Text}>내 게시글</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('LikeMain')}>
        <Text style={styles.Text}>책갈피 / 좋아요</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.Text}>개인정보 수정</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.Text}>QnA</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.Text}>로그아웃</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    paddingTop: 15,
    paddingLeft: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  headerContainer: {
    justifyContent: 'flex-start',
    paddingBottom: 20,
  },
  headerText: {
    fontSize: 25,
  },
  Text: {
    fontSize: 18,
    color: '#333',
    paddingBottom: 20,
  },
});
export default MyPage;
