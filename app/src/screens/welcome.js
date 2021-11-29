import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';





export default function Welcome() {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        A: require('../assets/fonts/a.ttf'),

      });
      useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login');
        }, 3000);
      },[]);

      if (!fontLoaded) {
        return null;
      }
      
    
   
    return (
        <View style={styles.container}>
            <View style={{ alignSelf:'center', marginTop:'25%' }}>
              <View style={{alignSelf:'center'}}>
              </View>
              
            </View>
            <Image source={require('../assets/footer.png')} style={{width:400, height:400, resizeMode:'contain', position:'absolute', bottom:0, left:0, opacity:0.2}}></Image>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        backgroundColor: '#FFF'
    },
    header: {
        height: '55%',
        width: '100%',
        marginTop: '-5%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },

});