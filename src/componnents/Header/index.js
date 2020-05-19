
import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView, Button, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';

const Headers = () => {
    return (
        <View>

            <TouchableOpacity>
                <AntDesign name="bars" size={35} style={styles.hIcon} />
            </TouchableOpacity>


            <Image source={require('./assets/logo_dark.png')}></Image>

            <TouchableOpacity>
                <AntDesign name="questioncircleo" size={35} color="white" style={styles.hIconT} />
            </TouchableOpacity>

        </View>

    )
},

    styles = StyleSheet.create({
        header: {

            backgroundColor: "#A0522D",
            flexDirection: 'row',
            paddingTop: 20,
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            paddingBottom: 7




        },
        txtHeader: {
            fontSize: 40,
            textAlign: 'center',
            color: '#ffffff',
            fontWeight: 'bold',
            height: 30




        },
        hIcon: {


            color: '#ffffff',
            marginTop: 5

        },
        hIconT: {

            textAlign: 'right',
            marginTop: 5


        }

    })

export default Headers;
