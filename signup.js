import { View, Text,TouchableOpacity,SafeAreaView,TextInput,onPress,Image ,Pressable,ScrollView} from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from "@expo/vector-icons";

const signup = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  return (
    <SafeAreaView style={{ backgroundColor:"#000"}}>
        <ScrollView>
     <View style={{marginBottom:15}}>
      <Text style={{ color:"#fff8dc", marginLeft:10, marginTop:10,marginBottom:8, fontSize:26, fontWeight:"500"}}>Create Account</Text>
      <Text style={{color:"#dcdcdc",fontSize:16,marginLeft:10,marginBottom:6}}> Connect with your friend today!</Text>
     </View>

   {/*  */}
                <View style={{ marginBottom: 3, marginLeft:11}}>
                    <Text style={{ color: "#fff8dc",fontSize: 16, fontWeight: 400, marginVertical:8}}>Username</Text>
                    <View style={{ width: "95%",height: 48,borderColor: "#f5f5dc",borderWidth: 1, borderRadius: 8,alignItems: "center",
                          justifyContent: "center",paddingLeft: 32}}>
                        <TextInput  placeholder='Enter your Username' placeholderTextColor="#f5f5dc"
                           style={{width: "100%"  }}/>
                    </View>
                </View>
   {/*  */}
                <View style={{ marginBottom: 3, marginLeft:11}}>
                    <Text style={{ color: "#fff8dc",fontSize: 16, fontWeight: 400, marginVertical:8}}>Email</Text>
                    <View style={{ width: "95%",height: 48,borderColor: "#f5f5dc",borderWidth: 1, borderRadius: 8,alignItems: "center",
                          justifyContent: "center",paddingLeft: 32}}>
                        <TextInput  placeholder='Enter your Email' placeholderTextColor="#f5f5dc" keyboardType='email-address'
                           style={{width: "100%"  }}/>
                    </View>
                </View>
    {/*  */}
                <View style={{ marginBottom: 3, marginLeft:11}}>
                    <Text style={{ color: "#fff8dc",fontSize: 16, fontWeight: 400, marginVertical:8}}>Mobile number</Text>
                    <View style={{ width: "95%",height: 48,borderColor: "#f5f5dc",borderWidth: 1, borderRadius: 8, alignItems: "center",
                        flexDirection: "row", justifyContent: "space-between",paddingLeft: 32}}>
                        <TextInput  placeholder='+84' placeholderTextColor="#f5f5dc" keyboardType='numeric' style={{width: "12%", 
                                borderRightWidth: 1,borderRightColor:"#f5f5dc", height: "100%" }}/>
                        <TextInput placeholder='Enter your phone Number' placeholderTextColor="#f5f5dc" keyboardType='numeric'
                            style={{ width: "80%"}}/>
                    </View>
                </View>
    {/* Password */}
                <View style={{ marginBottom: 20, marginLeft:11}}>
                    <Text style={{ color: "#fff8dc",fontSize: 16, fontWeight: 400, marginVertical:8}}>Passsword</Text>
                    <View style={{ width: "95%",height: 48,borderColor: "#f5f5dc",borderWidth: 1, borderRadius: 8,alignItems: "center",
                          justifyContent: "center",paddingLeft: 32}}>
                        <TextInput  placeholder='Enter your Password' placeholderTextColor="#f5f5dc" secureTextEntry={isPasswordShown}
                           style={{width: "100%"  }}/>
                            {/* hien an password */}
                         <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{position: "absolute", right: 12 }}>
                            {isPasswordShown == true ? 
                            (<Ionicons name="eye-off" size={24} color="#f5f5dc"/>) : (<Ionicons name="eye" size={24} color="#f5f5dc"/>)
                            }
                        </TouchableOpacity>  
                    </View>
                </View>
    {/*  */}
             <TouchableOpacity
                  style={{ backgroundColor: '#6495ed',
                  marginTop:4,
                  marginBottom:4,
                  borderRadius:10,               
                  width:310,
                  marginLeft:37,
                  height:35}}
                  onPress={onPress}
                  >
                <Text style={{color: '#fff', 
                            fontWeight: 'bold', 
                            marginTop:5.5,
                            fontSize: 16, 
                            textAlign: 'center', }}>
                            SIGN UP
              </Text>
             </TouchableOpacity>
      {/*  */} 
             <View style={{flexDirection: "row", justifyContent: "center", marginVertical: 4}}>
                    <Text style={{marginTop:10, color:"#dcdcdc",fontSize:16,textAlign:"center"}}>Already have an account?</Text>
                    <Pressable 
                        onPress={onPress}>
                        <Text style={{
                            fontSize: 16,
                            color:"#00ffff",
                            marginLeft: 6,
                            marginTop:9
                        }}>
                           To login
                        </Text>
                    </Pressable>
             </View>
      {/*  */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 ,marginTop:10}}>
                    <View style={{  flex: 1, height: 1, backgroundColor: "#CCCCCC", marginHorizontal:10 }}/>
                    <Text style={{ fontSize: 14 ,color:"#f5f5dc"}}>Or Sign up with</Text>
                    <View style={{ flex: 1, height: 1, backgroundColor: "#CCCCCC", marginHorizontal:10 }}/>
                </View>
      {/*  */}
      <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
         <TouchableOpacity
                        onPress={onPress}
                        style={{
                            flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row',height: 55,
                             width:150,  borderWidth: 1, borderColor: "#f5f5dc",marginRight: 4,marginLeft:5, borderRadius: 10
                        }}>
                        <Image
                            source={require("./image/facebook_480px.png")}
                            style={{height: 36,  width: 36,   marginRight: 8 }}
                            resizeMode='contain'
                        />
                        <Text style={{color:"#f5f5dc"}}>Facebook</Text>
          </TouchableOpacity>
       
          <TouchableOpacity
                        onPress={onPress}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 55,
                            width:150, 
                            borderWidth: 1,
                            borderColor: "#f5f5dc",
                            marginRight: 4,
                            marginLeft:5,
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={require("./image/google_480px.png")}
                            style={{ height: 36,width: 36,marginRight: 8 }}
                            resizeMode='contain'
                        />
                        <Text style={{color:"#f5f5dc"}}>Google</Text>
          </TouchableOpacity>   
      </View>
      {/*  */}
   
      </ScrollView>            
    </SafeAreaView>
  )
}

export default signup