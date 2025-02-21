import {StyleSheet, Button, TouchableOpacity, View, Text} from 'react-native';

const CustomButton = ({text, type, onPress}) => {
  return (
    <View style={styles.ButtonContainer}>
      <TouchableOpacity
        style={type === 'Default' ? styles.Default : styles.Negative}
        onPress={onPress}>
        <Text style={styles.Text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  ButtonContainer: {
    //alignItems: 'center',
  },
  Default: {
    borderRadius: 5,
    backgroundColor: '#8EB695',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  Negative: {
    borderRadius: 5,
    backgroundColor: '#8EB695',
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: 'rgb(251,95,95)',
  },
  Text: {
    fontSize: 15,
    color: 'white',
  },
});
export default CustomButton;
