import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';





export default function Register({}) {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        A: require('../assets/fonts/a.ttf'),

      });
    if (!fontLoaded) {
        return null;
      }

    return (
        <View style={styles.container}>
            <View style={{backgroundColor:"#2A59D8",  height:'12.5%'}}>
            <Text style={{fontFamily:'A', fontSize:20, marginHorizontal:'10%', color:"#FFF", alignSelf:'center', marginTop:'10%', textAlignVertical:'center'}}>Registration</Text>
            </View>
            <View style={{ marginTop: '5%'}}>
            <Svg height="50" width="100%" viewBox="0 0 50 50" style={{marginLeft:'-20%'}}>
            <Circle cx="15" cy="15" r="8" stroke="#2A59D8" strokeWidth="5" fill="#2A59D8" />
            <Line x1="25" y1="15" x2="50" y2="15" stroke="#2A59D8" strokeWidth="5" />
            <Circle cx="60" cy="15" r="8" stroke="#2A59D8" strokeWidth="5" fill="#FFF" />
            <Line x1="70" y1="15" x2="100" y2="15" stroke="#8a79d4" strokeWidth="5" />
            <Circle cx="110" cy="15" r="8" stroke="#8a79d4" strokeWidth="5" fill="#FFF" />
            <Line x1="120" y1="15" x2="150" y2="15" stroke="#8a79d4" strokeWidth="5" />
            <Circle cx="160" cy="15" r="8" stroke="#8a79d4" strokeWidth="5" fill="#FFF" />
            <Line x1="170" y1="15" x2="200" y2="15" stroke="#8a79d4" strokeWidth="5" />
            <Circle cx="210" cy="15" r="8" stroke="#8a79d4" strokeWidth="5" fill="#FFF" />
            </Svg>
            <Text style={{fontFamily:'A', fontSize:12, marginHorizontal:'10%', color:"#2A59D8", textAlign:'center'}}>LINKsurance provides fair insurance premium rates</Text>
            <Text style={{fontFamily:'A', fontSize:12, marginHorizontal:'10%', color:'#2A59D8', textAlign:'center'}}>Please enter the following information to continue.</Text>
              <View style={{marginTop:'0.5%', backgroundColor:'#FFF', alignSelf:'center', width:'100%'}}>
                 <View style={{marginHorizontal:'10%', marginTop:'10%', height:380}}><ScrollView>
                <Text style={{fontFamily:'A', fontSize:17}}>Full name</Text>
                <TextInput style={{borderColor:'#2A59D8', width:'100%', borderRadius:1, borderWidth:2, alignSelf:'center', fontSize:17, paddingLeft:'5%', paddingVertical:'3.5%', marginTop:'1.5%', color:'#2A59D8'}}></TextInput>
                <Text style={{fontFamily:'A', fontSize:17, marginTop:'5%'}}>Email address</Text>
                <TextInput style={{borderColor:'#2A59D8', width:'100%', borderRadius:1, borderWidth:2, alignSelf:'center', fontSize:17, paddingLeft:'5%', paddingVertical:'3.5%', marginTop:'1.5%', color:'#2A59D8'}}></TextInput>
                <Text style={{fontFamily:'A', fontSize:17, marginTop:'5%'}}>Mailing address</Text>
                <TextInput style={{borderColor:'#2A59D8', width:'100%', borderRadius:1, borderWidth:2, alignSelf:'center', fontSize:17, paddingLeft:'5%', paddingVertical:'3.5%', marginTop:'1.5%', color:'#2A59D8'}}></TextInput>
                <Text style={{fontFamily:'A', fontSize:17, marginTop:'5%'}}>Phone number</Text>
                <TextInput style={{borderColor:'#2A59D8', width:'100%', borderRadius:1, borderWidth:2, alignSelf:'center', fontSize:17, paddingLeft:'5%', paddingVertical:'3.5%', marginTop:'1.5%', color:'#2A59D8'}}></TextInput>
                <Text style={{fontFamily:'A', fontSize:17, marginTop:'5%'}}>Password</Text>
                <TextInput secureTextEntry style={{borderColor:'#2A59D8', width:'100%', borderRadius:1, borderWidth:2, alignSelf:'center', fontSize:17, paddingLeft:'5%', paddingVertical:'3.5%', marginTop:'1.5%', color:'#2A59D8'}}></TextInput>
                <Text style={{fontFamily:'A', fontSize:17, marginTop:'5%'}}>Confirm password</Text>
                <TextInput secureTextEntry style={{borderColor:'#2A59D8', width:'100%', borderRadius:1, borderWidth:2, alignSelf:'center', fontSize:17, paddingLeft:'5%', paddingVertical:'3.5%', marginTop:'1.5%', color:'#2A59D8'}}></TextInput>
                </ScrollView></View>    
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}><Text style={{fontFamily:'A', fontSize:17, textAlign:'center', alignSelf:'center', backgroundColor:'#2A59D8', color:'#FFF', width:'70%', paddingVertical:'4.5%', borderRadius:1, elevation:0, marginTop:'15%'}}>
                    CONTINUE
                 </Text></TouchableOpacity>

                

              </View>
            </View>
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
        height: '75%',
        width: '100%',
        marginTop: '5%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },

});