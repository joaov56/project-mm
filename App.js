import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView } from "react-native";
import {Ionicons} from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'; 


import * as Font from 'expo-font';





const App = () => {



  return (
    
    <View >
      <View style= {styles.header}>
        <AntDesign name="bars" size={24} style= {styles.hIcon}/>
        
        <Text style= {styles.txtHeader}>Madeter Marcenaria</Text>


        <AntDesign name="questioncircleo" size={24} color="white" style= {styles.hIconT}/>


      </View>

      
        <Text>Quem somos</Text>
        <Text>Nascidos em uma família de marceneiros os irmãos Jonas, Reginaldo, Ricardo e Sérgio, foram ensinados por seu pai Jonas Pereira, o oficio paterno. Passados muitos anos
          os irmãos unificando as empresas pertencentes ao grupo nascendo assim uma Nova Madeter.
        </Text>
      </View>




  );
};

const styles = StyleSheet.create({
  header: {
    
    backgroundColor: "#8B4513",
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'space-between',
    
    maxWidth: '100%'
    
    
    
  },
  txtHeader: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    flex:1,
    height: 20,
    

   
  },
  hIcon: {
    flex:1,
    
    color: '#ffffff'

  },
  hIconT: {
    flex:1,
    
  }
})

export default App;
