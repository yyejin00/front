import React, {useCallback, useReducer, useRef} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import KiwoomeeCard from '../../components/KiwoomeeCard';
const mockData = [
  {
    id: 0,
    name: '꾸꾸',
    image: `https://blog.kakaocdn.net/dn/SNv32/btrDnrzYYCI/d7GGWZ1uFIWpfMqLKrd5L1/img.jpg`,
    plantType: '필로덴드론 마제스틱',
    watering: 7,
  },
  {
    id: 1,
    image:
      'https://blog.kakaocdn.net/dn/v7QKf/btqCYF5ikEV/ZdcTOovtJxQf2WmTK6bSok/img.png',
    name: '여인초',
    plantType: '여인초',
    watering: 10,
  },
  {
    id: 2,
    image:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjA2MjBfMTUx/MDAxNjU1NzMyNDg4MTQx.y96wFfiTkYG0MrDTp5MMcEH6PMyimDFMaoARUlHqvawg.XmCZTX79VzoAWLZXVGZIEPAPQ9E_xYzeGyV-3u7hViMg.JPEG.92114465/1655732485792.jpg?type=w800',
    name: '바질이',
    plantType: '바질',
    watering: 12,
  },
  {
    id: 3,
    image:
      'https://mblogthumb-phinf.pstatic.net/MjAyMjA2MjBfMTUx/MDAxNjU1NzMyNDg4MTQx.y96wFfiTkYG0MrDTp5MMcEH6PMyimDFMaoARUlHqvawg.XmCZTX79VzoAWLZXVGZIEPAPQ9E_xYzeGyV-3u7hViMg.JPEG.92114465/1655732485792.jpg?type=w800',
    name: '초록이',
    plantType: '필로덴드론 실버메탈',
    watering: 5,
  },
  {
    id: 4,
    image:
      'https://webp2.xplant.co.kr/data/thumb/item/420x380-2/16605/1660532275_l1',
    name: '미친 식물',
    plantType: '몬스테라',
    watering: 8,
  },
  {
    id: 5,
    image:
      'https://groo-images.s3.ap-northeast-2.amazonaws.com/plantpedia/JpXwvDi8SjoNYbAb3eRtv',
    name: '첫째',
    plantType: '알로카시아',
    watering: 4,
  },
];
function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map(item =>
        item.id === action.targetId ? {...item, isDone: !item.isDone} : item,
      );
    case 'DELETE':
      return state.filter(item => item.id !== action.targetId);

    default:
      return state;
  }
}
const Kiwoomee = ({navigation}) => {
  const [kiwoomee, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(6);

  //id, image, name, plantType, watering;
  const onCreate = content => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        image: image,
        plantType: plantType,
        watering: watering,
      },
    });
  };

  const onUpdate = targetId => {
    dispatch({
      type: 'UPDATE',
      targetId: targetId,
    });
  };

  const onDelete = targetId => {
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    });
  };

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
          onPress={() => navigation.push('PlantNew', kiwoomee)}
        />
      </View>
      <FlatList
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        data={kiwoomee}
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

export default Kiwoomee;
