import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Switch,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
const KiwoomeeNew = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '가지', value: '가지'},
    {label: '감나무', value: '감나무'},
    {label: '네펜데스', value: '네펜데스'},
    {label: '능소화', value: '능소화'},
    {label: '데이지', value: '데이지'},
    {label: '딸기', value: '딸기'},
  ]);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  const navigation = useNavigation();
  return (
    <View style={styles.plantNewContainer}>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Text style={styles.plantTitle}>식물정보</Text>
          <View style={styles.innerContainer}>
            <Text style={styles.text}>식물이름</Text>
            <TextInput style={styles.input}></TextInput>
            <Text style={styles.text}>식물이름찾기</Text>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.inner}>
            <Text style={styles.plantTitle}>알림설정</Text>
            <Switch
              value={isEnabled}
              onValueChange={toggleSwitch}
              thumbColor={isEnabled ? '#8EB695' : '#f4f3f4'}
            />
          </View>
          <View>
            <Text style={styles.text}>물주기</Text>
            <View style={styles.inner}>
              <View
                style={
                  isEnabled
                    ? styles.textInputzone
                    : StyleSheet.compose(styles.textInputzone, styles.false)
                }>
                <TextInput editable={isEnabled}></TextInput>
              </View>
              <Text style={styles.text}>일에 한 번 씩 알림 설정</Text>
            </View>
            <Text style={styles.text}>0월0일에 알림이 울려요!</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.plantTitle}>사진첨부</Text>
          <View style={styles.buttonzone}>
            <CustomButton
              text={'사진첨부'}
              type={'Default'}
              /*onPress={() => navigation.navigate('PhotoModal')}*/
            />
          </View>
        </View>
      </ScrollView>
      <View>
        <CustomButton
          text={'등록하기'}
          type={'Default'}
          onPress={() => navigation.push()}
          /*onPress={()=>navigation.push('KiwoomMain',state 값)}*/
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  plantNewContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  scroll: {
    width: '100%',
  },
  input: {borderColor: '#b1b1b1', borderRadius: 5, borderWidth: 1, padding: 10},
  inner: {flexDirection: 'row', alignItems: 'center'},
  text: {
    fontSize: 15,
  },
  container: {marginBottom: 10},

  plantTitle: {marginBottom: 10, fontSize: 18, fontWeight: 'bold'},
  textInputzone: {
    height: 40,
    margin: 12,
    width: 50,
    borderColor: '#b1b1b1',
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
  },
  false: {backgroundColor: '#cacaca', fontcolor: 'gray'},
  buttonzone: {width: 120, height: 40},
});
export default KiwoomeeNew;
