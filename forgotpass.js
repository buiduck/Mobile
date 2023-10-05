import { View, Text,SafeAreaView,TextInput,TouchableOpacity,Image,onPress } from 'react-native';
import React from 'react';


const forgotpass = () => {
  return (
    <View >
        <SafeAreaView>
               <View style={{justifyContent:"center",alignItems:"center",marginTop:30}}>
                 <View style={{paddingTop: 30,backgroundColor:"#e6e6fa", width:150, height:150, borderRadius: 100 , borderWidth: 1.5, borderColor:"black", overflow:"hidden"}}>
                     <Image source={require('./image/man_facepalming_256px.png')}
                      style={{ flex:1,  width:undefined,height:undefined}} resizeMode="center">
                     </Image>
                 </View>
                 <Text style={{ color:"#000", marginLeft:10, marginTop:20,marginBottom:8, fontSize:28, fontWeight:"600"}}>Forgot Password?</Text>
                 <Text style={{color:"#808080",fontSize:16,marginBottom:10}}>Enter the email address associated with your account.</Text>
                 {/*  */}
                  <View>
                    <View>
                         <Text style={{ color: "#000",fontSize: 18, fontWeight: 500, marginVertical:8}}>Email</Text>
                              <View style={{ width: 350,height: 48,borderColor: "#000",borderWidth: 1, borderRadius: 8,alignItems: "center",
                                 justifyContent: "center"}} >                         
                                <TextInput placeholder='Enter your Email' placeholderTextColor="#696969" keyboardType='email-address'>          
                                </TextInput>
                              </View>
                     </View>

                    <TouchableOpacity style={{ backgroundColor: '#6495ed',
                  marginTop:20,
                  marginBottom:4,
                  borderRadius:20,               
                  width:350,
                  alignItems:"center",
                  justifyContent:"center",
                  height:40}}
                  onPress={onPress}
                  >
                      <Text style={{color:'#fffff0',fontWeight:'bold',fontSize: 16 }}>
                        Send</Text>
                    </TouchableOpacity>
                  </View>

               </View>
        </SafeAreaView>
    </View>
  )
}

export default forgotpass;