import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, Image, TouchableOpacity } from 'react-native';
import Logo from '../Header';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';


const fetchFonts = () => {
    return Font.loadAsync({
        'caladea-bold': require('../../../assets/fonts/Caladea-Bold.ttf'),
        'caladea-reg': require('../../../assets/fonts/Caladea-Regular.ttf'),
        'caladea-bolditalic': require('../../../assets/fonts/Caladea-BoldItalic.ttf'),


    });
};


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'MDFs',
        image: require('../../../assets/madeira.jpg'),
        price: '23,50',
        offerPrice: '19,00'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Ferragens',
        image: require('../../../assets/ferragem.jpg'),
        price: '23,50',
        offerPrice: '19,00'
    },



];



function Home() {

    const [dataLoaded, setDataLoaded] = useState(false);
    if (!dataLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setDataLoaded(true)}
            />
        )
    }


    return (



        <View>
            <Logo />
            <Text style={styles.offer}>Ofertas</Text>
            <FlatList
                data={DATA}

                renderItem={({ item }) =>

                    <>

                        <TouchableOpacity>
                            <ImageBackground style={{ width: 395, height: 130, marginTop: 20 }} source={item.image}>
                                <Text style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center', fontSize: 25, marginTop: 50 }}>{item.title}</Text>
                            </ImageBackground>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 80, backgroundColor: '#A0522D' }}>
                                <Text style={{ textAlign: 'center', fontSize: 20, textDecorationLine: 'line-through', color: 'red' }}>R${item.price} off</Text>
                                <Text style={{ textAlign: 'center', fontSize: 30, }}>R${item.offerPrice}</Text>
                            </View>

                        </TouchableOpacity>


                    </>}

                keyExtractor={item => item.id}

            />
        </View>
    )
}


const styles = StyleSheet.create({
    offer: {
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'caladea-bolditalic',


    }
})

export default Home