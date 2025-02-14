import React, {useCallback} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import CustomButton from '../components/CustomButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import KiwoomeeCard from '../components/KiwoomeeCard';
const card = [
  {
    id: 1,
    image: `https://blog.kakaocdn.net/dn/SNv32/btrDnrzYYCI/d7GGWZ1uFIWpfMqLKrd5L1/img.jpg`,
    name: '꾸꾸',
  },
  {
    id: 2,
    image:
      'https://blog.kakaocdn.net/dn/v7QKf/btqCYF5ikEV/ZdcTOovtJxQf2WmTK6bSok/img.png',
    name: '여인초',
  },
  {
    id: 3,
    image:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjA2MjBfMTUx/MDAxNjU1NzMyNDg4MTQx.y96wFfiTkYG0MrDTp5MMcEH6PMyimDFMaoARUlHqvawg.XmCZTX79VzoAWLZXVGZIEPAPQ9E_xYzeGyV-3u7hViMg.JPEG.92114465/1655732485792.jpg?type=w800',
    name: '바질이',
  },
  {
    id: 4,
    image:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjA2MjBfMTUx/MDAxNjU1NzMyNDg4MTQx.y96wFfiTkYG0MrDTp5MMcEH6PMyimDFMaoARUlHqvawg.XmCZTX79VzoAWLZXVGZIEPAPQ9E_xYzeGyV-3u7hViMg.JPEG.92114465/1655732485792.jpg?type=w800',
    name: '초록이',
  },
  {
    id: 5,
    image:
      'https://webp2.xplant.co.kr/data/thumb/item/420x380-2/16605/1660532275_l1',
    name: '미친 식물',
  },
  {
    id: 6,
    image:
      'https://groo-images.s3.ap-northeast-2.amazonaws.com/plantpedia/JpXwvDi8SjoNYbAb3eRtv',
    name: '첫째',
  },
];
const Main = ({navigation}) => {
  const renderItem = useCallback(({item}) => {
    return <KiwoomeeCard data={item} />;
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerText}>내 키우미</Text>
        <CustomButton
          text={'식물추가'}
          type={'Default'}
          onPress={() => navigation.navigate('PlantNew')}
        />
      </View>
      <FlatList
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        data={card}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
//
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 25,
  },
  cardzone: {width: '100%', height: '100%', marginTop: 5},
  card: {
    flexDirection: 'row',

    paddingHorizontal: 16,
    paddingTop: 10,
  },
});

export default Main;
