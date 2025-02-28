import React from 'react';
import {View, Text, StatusBar, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchInput from '../../components/SearchInput';
import Hotpost from '../../components/Hotpost';
import PostItem from '../../components/PostItem';
import Posts from '../../components/Posts';
import FloatButton from '../../components/FloatButton';

const Home = () => {
  //posts 부분에서 오류나는 것 같아서 일단 빼놓음(key 값 중복이라는 오류뜨는데 일단 어디부분이 오륜지 모르겠음 )
  return (
    <SafeAreaView>
      <SearchInput />
      <ScrollView>
        <Hotpost />
      </ScrollView>
      <FloatButton />
    </SafeAreaView>
  );
};
export default Home;
