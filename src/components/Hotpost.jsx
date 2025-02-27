import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo'

const postInfo = [
    {
        id: 1,
        name: 'Title1',
        image: require('../../assets/images/userProfile.jpeg'),
    },
    {
        id: 2,
        name: 'Title2',
        image: require('../../assets/images/profile1.jpeg'),
    },
    {
        id: 3,
        name: 'Title3',
        image: require('../../assets/images/profile2.jpeg'),
    },
    {
        id: 4,
        name: 'Title4',
        image: require('../../assets/images/profile3.jpeg'),
    },
    {
        id: 5,
        name: 'Title5',
        image: require('../../assets/images/profile4.jpeg'),
    },
]

const styles = StyleSheet.create({
    /* Hot 게시글 Style */
    titleText: {
        paddingLeft: 5,
        color: 'black',
        fontWeight: 'bold'
    },

    /* 이미지 틀 */
    imageView: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        borderRadius: 5,
        backgroundColor: 'orange',
    },

    /* Hot 게시글 제목 */
    hotpostText: {
        color: 'black',
        fontSize: 10,
        paddingTop: 5,
    }
});

const Hotpost = () => {
    const navigation = useNavigation();
  return (
    <View>
    <Text style={styles.titleText}>
        Hot 게시글
    </Text>
    <ScrollView
        horizontal={true}
        style={{ paddingVertical: 10 }}
    >
     {postInfo.map((data, index) => {
        return (
            <TouchableOpacity
                key={index}
                onPress={() => navigation.push('Status', {
                    name: data.name,
                    image: data.image,
                })}
            >
                <View
                    style={{
                        flexDirection: 'column',
                        paddingHorizontal: 5,
                        position: 'relative',
                    }}
                >
                    <View style={styles.imageView}>
                        <Image source={data.image} style={styles.image} />
                    </View>
                    <Text style={styles.hotpostText}>
                        {data.name}
                    </Text>
                </View>                
            </TouchableOpacity>
            
        )
     })}
    </ScrollView>
    </View>
  )
}

export default Hotpost;
