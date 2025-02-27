import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';

const HotPlant = ({navigate}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.Title}>추천 식물</Text>
        <TouchableOpacity onPress={() => navigation.navigate('PlantDetail')}>
            <View>
                <View style={styles.TextContainer}>
                    <Image source={require('../../assets/images/userProfile.jpeg')} style={styles.Imgage} />
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
        </TouchableOpacity> 
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
