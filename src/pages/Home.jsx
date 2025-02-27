import React from 'react';
import {View, Text, StatusBar, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchInput from '../components/SearchInput';
import Hotpost from '../components/Hotpost';
import PostItem from '../components/PostItem';
import Posts from '../components/Posts';
import FloatButton from '../components/FloatButton';

const Home = () => {
  return (
    <SafeAreaView>
      <SearchInput />
      <ScrollView>
        <Hotpost />
        <Posts />
      </ScrollView>
      <FloatButton />
    </SafeAreaView>
  );
};
export default Home;
