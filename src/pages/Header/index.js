import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

function Logo() {
    return (
        <View style={styles.header}>
            <Image source={require('../../../assets/logo_light.png')} style={styles.img}></Image>
        </View>
    )
}

const styles = StyleSheet.create({

    header: {
        backgroundColor: "#A0522D",
        justifyContent: 'center',
        alignItems: 'center',


    },
    img: {
        width: '100%',
        height: 70,
        resizeMode: 'contain'
    }



})
export default Logo