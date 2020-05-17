import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView, Button} from "react-native";
import {Ionicons} from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'; 


import * as Font from 'expo-font';





const App = () => {



  return (
    
    <View >
      <View style= {styles.header}>
        <TouchableOpacity>
        <AntDesign name="bars" size={35} style= {styles.hIcon}/>
        </TouchableOpacity>

        
        <Text style= {styles.txtHeader}>Madeter</Text>

        <TouchableOpacity>
        <AntDesign name="questioncircleo" size={35} color="white" style= {styles.hIconT}/>
        </TouchableOpacity>
      


      </View>

      
        <Text style= {styles.txtG}>Quem somos</Text>
        <Text style= {styles.txtP}>Nascidos em uma família de marceneiros os irmãos Jonas, Reginaldo, Ricardo e Sérgio, foram ensinados por seu pai Jonas Pereira, o oficio paterno. Passados muitos anos
          os irmãos unificando as empresas pertencentes ao grupo nascendo assim uma Nova Madeter.
        </Text>


        <TouchableOpacity style= {styles.btnPrinc}>
          <Text style= {styles.btnPrincTxt}>Veja nossos produtos</Text>
        </TouchableOpacity>
      </View>




  );
};

const styles = StyleSheet.create({
  header: {
    
    backgroundColor: "#8B4513",
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'space-between',
    paddingHorizontal:15,
    
    height:70
    
    
    
  },
  txtHeader: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    flex:1,
    
    

   
  },
  hIcon: {
    flex:1,
    
    color: '#ffffff'

  },
  hIconT: {
    flex:1,
    textAlign: 'right'
    
    
  },

  txtG: {
    color: '#000000',
    textAlign: 'center',
    fontWeight:'bold',
    fontSize:35
  },
  txtP: {
    fontSize:20,
    color: '#8B4513'
  },
  btnPrinc:{

    
  },
  btnPrincTxt:{
    textAlign: 'center',
    backgroundColor: "#8B4513"
  }

})

export default App;
