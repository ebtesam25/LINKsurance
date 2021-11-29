import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import { Modal, Portal, Provider } from 'react-native-paper';





export default function Home() {
    const navigation = useNavigation();
    const [visible, setVisible] = React.useState(false);
    const [readings, setReadings] = useState({"pulseav": 98.2, "spo2av": 99.5, "tempav": 98.35, "userid": "1", "fevers": 1, "score": 900.0})
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const userid = 1;
    const [fontLoaded] = useFonts({
        A: require('../assets/fonts/a.ttf'),

      });

      const _getInsuranceRate = () => {
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch(`http://us-central1-aiot-fit-xlab.cloudfunctions.net/linksurance?userid=${userid}`, requestOptions)
          .then(response => response.text())
          .then(result => {setReadings(JSON.parse(result));})
          .catch(error => console.log('error', error));
      }
    
    

      if (!fontLoaded) {
        return null;
      }

      useEffect
      
    
   
    return (
        <View style={styles.container}>
          <Provider>
                <Portal>
          <View style={{marginTop:'10%', flexDirection:'row', marginHorizontal:'7.5%', justifyContent:'space-between', marginBottom:'5%'}}>
            <Icon name="menu" type="feather" color="#000" size={30} style={{alignSelf:'flex-start'}}></Icon>
            <Text style={{fontFamily:'A', fontSize:20, marginTop:'1.5%', color:"#000"}}>Home</Text>
            <Icon name="settings" type="feather" color="#000" size={25} style={{alignSelf:'flex-end',}}></Icon>
          </View>
            <View style={{ alignSelf:'center', marginTop:'2.5%', backgroundColor:'#2A59D8', width:'90%', borderRadius:1 }}>
              <View style={{marginHorizontal:'5%', marginTop:'7.5%', marginBottom:'6.5%'}}>
                <Image source={require('../assets/chef.jpg')} style={{width:150, height:150, resizeMode:'cover', borderRadius:200, alignSelf:'center'}}></Image>
                <Text style={{fontFamily:'A', fontSize:25, color:'#FFF', textAlign:'left', marginLeft:'5%',marginTop:'5%', alignSelf:'center'}} onPress={()=>_getInsuranceRate()}>John Doe</Text>
                <Text style={{fontFamily:'A', fontSize:15, color:'#FFF', textAlign:'left', marginLeft:'5%', alignSelf:'center'}}>Orlando, FL</Text>
              </View>
        </View>
           
                <View>
                <Text style={{fontFamily:'A', fontSize:19, marginTop:'5%', textAlign:'center'}}>Insurance Premium</Text>
                <Text style={{fontFamily:'A', fontSize:40, marginTop:'5%', textAlign:'center',color:"#2A59D8"}}>{readings.score}</Text>
              
                </View>
                
                    <Text style={{fontFamily:'A', fontSize:17, marginHorizontal:'10%', marginTop:'5%'}}>Breakdown</Text>
                    <Text style={{fontFamily:'A', fontSize:10, marginHorizontal:'10%', marginTop:'.5%', color:"#000"}}>Here's the data we use to calculate your insurance premium</Text>
                    <Text style={{fontFamily:'A', fontSize:12, marginHorizontal:'10%', marginTop:'5%', color:'#2A59D8'}}>Pulse: {readings.pulseav}</Text>
                    <Text style={{fontFamily:'A', fontSize:12, marginHorizontal:'10%', marginTop:'5%', color:'#2A59D8'}}>Blood Oxygen Level: {readings.spo2av}</Text>
                    <Text style={{fontFamily:'A', fontSize:12, marginHorizontal:'10%', marginTop:'5%', color:'#2A59D8'}}>Body Temperature: {readings.tempav}</Text>
                    <Text style={{fontFamily:'A', fontSize:12, marginHorizontal:'10%', marginTop:'5%', color:'#2A59D8'}}>Fevers: {readings.fevers}</Text>
                    <TouchableOpacity onPress={()=>{Linking.openURL('https://flcu.org/Business?referral=MARIALENDSBA01');}}><View style={{backgroundColor:'#2A59D8', width:'80%', alignSelf:'center', borderRadius:1, height:50, marginTop:'5%'}}>
                      <Text style={{textAlign:'center', color:'#FFF', fontFamily:'A', textAlignVertical:'center', marginTop:'5%'}}>Submit a claim</Text></View></TouchableOpacity>
                </Portal>
                
              </Provider>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        backgroundColor: '#FFF',
    },
    header: {
        height: '55%',
        width: '100%',
        marginTop: '-5%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },

});