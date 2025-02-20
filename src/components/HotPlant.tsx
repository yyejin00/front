import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const HotPlant = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.Title}>추천 식물</Text>
        <View style={styles.TextContainer}>
            <View style={styles.Imgage}></View>
            <View>
                <Text style={styles.Text}>
                    식물 이름
                </Text>
                <Text style={styles.Text}>
                    식물 설명 식물 설명 식물 설명 식물 설명 식물 설명 식물 설명 식물 설명 식물 설명 
                </Text>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },

    Title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'green',
        paddingVertical: 10,
    },

    Imgage: {
        width: 80,
        height: 80,
        borderWidth: 1,
        borderRadius: 10,
    },

    TextContainer: {
        flexDirection: 'row',
    },

    Text: {
        fontSize: 10,
        color: 'black',
        width: '65%',
        paddingLeft: 10,
        paddingBottom: 10,
    }

});

export default HotPlant;
