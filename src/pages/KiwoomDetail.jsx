import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
//물준 날짜를 어떻게 표시해야하낭
const PlantDetail = ({name, image, onalarm, waterDate}) => {
  const img = 'https://cdn.imweb.me/thumbnail/20210208/ae9e5d4ddb7a7.png';
  const [selected, setSelected] = useState('');
  const [alarm, setAlarm] = useState(false);
  const onAlarm = () => setAlarm(!alarm);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>쑥쑥이</Text>
          <TouchableOpacity>
            <Text style={styles.titleText}>🔔</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.innerContainer}>
          <Image
            style={styles.image}
            source={{
              uri: img,
            }}
          />
        </View>
        <View style={styles.innerContainer}>
          <Text>식물종류</Text>
          <Text style={styles.text}>필로덴드론 실버메탈</Text>
        </View>
        <View style={styles.innerContainer}>
          <Text>물주기</Text>
          <Text style={styles.text}>7 일에 한 번씩 화요일에 물주기</Text>
        </View>
        <View style={styles.calendarContainer}>
          <Text>사진으로 기록하기</Text>
          <Calendar
            onDayPress={day => {
              setSelected(day.dateString);
            }}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: 'grey',
              },
              '2025-02-03': {marked: true},
              '2025-02-10': {marked: true},
              '2025-02-16': {marked: true},
            }}
            theme={{
              backgroundColor: 'rgba(0, 0, 0, 0)',
              calendarBackground: 'rgba(, 0, 0, 0)',
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {padding: 15},
  titleContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {fontSize: 20, marginBottom: 10},
  innerContainer: {margin: 10, flexDirection: 'row'},
  image: {width: '100%', height: 400},
  text: {fontSize: 16, marginLeft: 10},
  calendarContainer: {margin: 10},
});

export default PlantDetail;
