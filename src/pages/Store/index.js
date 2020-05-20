import React, { Fragment } from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, Image, TouchableOpacity, ImageBackgroundBase } from 'react-native';
import Logo from '../Header'

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'MDFs',
        image: require('../../../assets/madeira.jpg'),
        price: '23,50'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Ferragens',
        image: require('../../../assets/ferragem.jpg'),
        price: '23,50'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        image: require('../../../assets/madeira.jpg'),
        price: '23,50'
    },
];

function Item({ title }) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}


export default function Store() {
    return (
        <View>
            <Logo />


            <FlatList
                data={DATA}

                renderItem={({ item }) =>

                    <>

                        <TouchableOpacity>
                            <ImageBackground style={{ width: 395, height: 130, marginTop: 20 }} source={item.image}>
                                <Text style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center', fontSize: 25, marginTop: 50, fontWeight: 'bold' }}>{item.title}</Text>
                            </ImageBackground>
                            {/*                             <Text style={{ textAlign: 'center', fontSize: 20, }}>R${item.price}</Text> */}
                        </TouchableOpacity>


                    </>}

                keyExtractor={item => item.id}

            />

        </View>
    )
}

const styles = StyleSheet.create({


})
