import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const FloatButton = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('PostUpload')}>
                <Text style={styles.fabText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },

      fab: {
        position: 'absolute',
        right: 20,
        bottom: 80,
        backgroundColor: 'white',
        width: 40,
        height: 40,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, // Android 그림자 효과
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
      },

      fabText: {
        fontSize: 20,
        color: 'black',
      },
});

export default FloatButton;
