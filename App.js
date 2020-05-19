import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView, Button, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import Routes from './src/Routes'


import * as Font from 'expo-font';
import AboutUs from "./src/pages/AboutUs";







const App = () => {



  return (

    //<View >
    <Routes />
    /* <View style={styles.header}>
      <TouchableOpacity>
        <AntDesign name="bars" size={35} style={styles.hIcon} />
      </TouchableOpacity>


      <Image source={require('./assets/logo_dark.png')}></Image>

      <TouchableOpacity>
        <AntDesign name="questioncircleo" size={35} color="white" style={styles.hIconT} />
      </TouchableOpacity>



    </View>

    <View>

      <Text style={styles.txtG}>Quem somos</Text>
      <Text style={styles.txtP}> {`Nascidos em uma família de marceneiros os irmãos Jonas, Reginaldo, Ricardo e Sérgio, foram ensinados por seu pai Jonas Pereira, o oficio paterno. Passados muitos anos os irmãos unificando as empresas pertencentes ao grupo nascendo assim uma Nova Madeter.`}</Text>


      <TouchableOpacity style={styles.btnPrinc}>
        <Text style={styles.btnPrincTxt}>Veja nossos produtos</Text>
      </TouchableOpacity>

    </View>

    <View style={styles.footer}>
      <AntDesign name="home" size={24} color="white" />
      <AntDesign name="shoppingcart" size={24} color="white" />
      <AntDesign name="setting" size={24} color="white" />

    </View>
*/


    // </View>




  );
};

const styles = StyleSheet.create({
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


  },

  txtG: {
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 35
  },
  txtP: {
    fontSize: 25,
    color: '#8B4513'
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

  },

  footer: {
    backgroundColor: "#A0522D",
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginTop: 270,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40
  }

})

export default App;
