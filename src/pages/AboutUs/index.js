import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Logo from '../Header';
import { createStackNavigator } from '@react-navigation/stack';
import Store from '../Store'

const AboutUs = ({ navigation }) => {
    return (
        <View>
            <Logo />
            <Text style={styles.txtG}>Nossa história</Text>
            <Text style={styles.txtP}> Nascidos em uma família de marceneiros os irmãos Jonas, Reginaldo, Ricardo e Sérgio, foram ensinados por seu pai Jonas Pereira, o oficio paterno. Passados muitos anos os irmãos unificando as empresas pertencentes ao grupo nascendo assim uma Nova Madeter.</Text>


            <TouchableOpacity style={styles.btnPrinc} onPress={() => navigation.navigate('Store')} title='Veja' >
                <Text style={styles.btnPrincTxt}>Veja nossos produtos</Text>
            </TouchableOpacity>

        </View>
    )

}

const styles = StyleSheet.create({
    txtG: {
        color: '#000000',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 35
    },
    txtP: {
        fontSize: 25,
        color: '#8B4513',
        marginLeft: 10
    },
    btnPrinc: {
        backgroundColor: '#A0522D',
        width: 250,
        textAlign: 'center',
        borderRadius: 7,
        fontSize: 60,
        marginLeft: 80,
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20



    },
    btnPrincTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffffff'

    }
})
export default AboutUs;