import { View, Text,TouchableOpacity,SafeAreaView,TextInput,onPress,Image,ScrollView} from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from "@expo/vector-icons";

const signup = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
//    Validate
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    fullname: '',
    password: '',
  });
  const [errors,setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username) {
      newErrors.username = 'Vui lòng nhập tên người dùng !';
    }

    if (!formData.email || !formData.email.includes('@')) {
      newErrors.email = 'Email không hợp lệ !' ;
    }
   //
    
    if (!formData.fullname ) {
        newErrors.fullname = 'Vui lòng nhập họ và tên!';
      }

    if (formData.password.length < 4) {
      newErrors.password = 'Mật khẩu phải có ít nhất 4 ký tự';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Dữ liệu hợp lệ, bạn có thể thực hiện đăng ký ở đây
    }
  };



  return (
    <SafeAreaView style={{ backgroundColor:"#fffaf0"}}>
        <ScrollView>
     <View style={{marginBottom:15}}>
      <Text style={{ color:"#000", marginLeft:10, marginTop:10,marginBottom:7, fontSize:25, fontWeight:"500"}}>Create Account</Text>
      <Text style={{color:"#000",fontSize:15,marginLeft:8,marginBottom:10}}> Connect with your friend today!</Text>
        <View style={{  paddingTop: 15,
           width:113,
           height:113,
           marginLeft:139
          }}>
        <Image source={require('./image/key_480px.png')} style={{ flex:1,width:undefined, height:undefined}} resizeMode="center"></Image>
        </View>
     </View>

   {/* Username */}
                <View style={{ marginBottom: 3, marginLeft:11}}>
                    <Text style={{ color: "#2f4f4f",fontSize: 16, fontWeight: 400, marginVertical:8}}>Username</Text>
                    <View style={{ width: "95%",height: 48,borderColor: "#000",borderWidth: 1, borderRadius: 8,alignItems: "center",
                          justifyContent: "center",paddingLeft: 32}}>
                        <TextInput color="#000" placeholder='Enter your Username' placeholderTextColor="#696969"
                           value={formData.username}
                           onChangeText={(text) => setFormData({ ...formData, username: text })}
                           style={{width: "100%"  }}/>
                    </View>
                    {errors.username && <Text style={{ color: 'red',marginTop:2 }}>{errors.username}</Text>}
                </View>
   {/* Email */}
                <View style={{ marginBottom: 3, marginLeft:11}}>
                    <Text style={{ color: "#2f4f4f",fontSize: 16, fontWeight: 400, marginVertical:8}}>Email</Text>
                    <View style={{ color: "#000",width: "95%",height: 48,borderColor: "#000",borderWidth: 1, borderRadius: 8,alignItems: "center",
                          justifyContent: "center",paddingLeft: 32}}>
                        <TextInput   color="#000" placeholder='Enter your Email' placeholderTextColor="#696969" keyboardType='email-address'
                        value={formData.email}
                        onChangeText={(text) => setFormData({ ...formData, email: text })}
                           style={{width: "100%"  }}/>
                    </View>
                    {errors.email && <Text style={{ color: 'red',marginTop:2 }}>{errors.email}</Text>}

                </View>
    {/* Full name */}
                <View style={{ marginBottom: 3, marginLeft:11}}>
                    <Text style={{ color: "#2f4f4f",fontSize: 16, fontWeight: 400, marginVertical:8}}>Full name</Text>
                    <View style={{ width: "95%",height: 48,borderColor: "#000",borderWidth: 1, borderRadius: 8, alignItems: "center",
                        flexDirection: "row", justifyContent: "space-between",paddingLeft: 32}}>
                        <TextInput color="000" placeholder='Enter your Full name' placeholderTextColor="#696969" 
                        value={formData.fullname}
                        onChangeText={(text) => setFormData({ ...formData, fullname: text })}
                            style={{ width: "80%"}}/>
                    </View>
                    {errors.fullname && <Text style={{ color: 'red',marginTop:2 }}>{errors.fullname}</Text>}
                </View>
    {/* Password */}
                <View style={{ marginBottom: 15, marginLeft:11}}>
                    <Text style={{ color: "#2f4f4f",fontSize: 16, fontWeight: 400, marginVertical:8}}>Passsword</Text>
                    <View style={{ width: "95%",height: 48,borderColor: "#000",borderWidth: 1, borderRadius: 8,alignItems: "center",
                          justifyContent: "center",paddingLeft: 32}}>
                        <TextInput  color="#000" placeholder='Enter your Password' placeholderTextColor="#696969" secureTextEntry={isPasswordShown}
                                value={formData.password}
                                onChangeText={(text) => setFormData({ ...formData, password: text })}
                           style={{width: "100%"  }}/>
                            {/* hien an password */}
                         <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{position: "absolute", right: 12 }}>
                            {isPasswordShown == true ? 
                            (<Ionicons name="eye-off" size={24} color="#000"/>) : (<Ionicons name="eye" size={24} color="#000"/>)
                            }
                        </TouchableOpacity>  
                    </View>
                    {errors.password && <Text style={{ color: 'red', marginTop:2 }}>{errors.password}</Text>}
                </View>
    {/*  */}
             <TouchableOpacity
                  style={{ backgroundColor: '#1e90ff',
                  marginTop:4,
                  marginBottom:3,
                  borderRadius:10,               
                  width:310,
                  marginLeft:37,
                  height:35}}
                  onPress={validateForm}
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
                    <Text style={{marginTop:15, color:"#696969",fontSize:16,textAlign:"center"}}>Already have an account?</Text>
                    <TouchableOpacity
                        onPress={onPress}>
                        <Text style={{
                            fontSize: 16,
                            color:"blue",
                            marginLeft: 6,
                            marginTop:14
                        }}>
                           To login
                        </Text>
                    </TouchableOpacity>
             </View>
      {/*  */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 ,marginTop:10}}>
                    <View style={{  flex: 1, height: 1, backgroundColor: "#CCCCCC", marginHorizontal:10 }}/>
                    <Text style={{ fontSize: 14 ,color:"#000"}}>Or Sign up with</Text>
                    <View style={{ flex: 1, height: 1, backgroundColor: "#CCCCCC", marginHorizontal:10 }}/>
                </View>
      {/*  */}
      <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginBottom:40
                }}>
         <TouchableOpacity
                        onPress={onPress}
                        style={{
                            flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row',height: 55,
                             width:150,  borderWidth: 1, borderColor: "#000",marginRight: 4,marginLeft:5, borderRadius: 10
                        }}>
                        <Image
                            source={require("./image/facebook_480px.png")}
                            style={{height: 36,  width: 36,   marginRight: 8 }}
                            resizeMode='contain'
                        />
                        <Text style={{color:"#000"}}>Facebook</Text>
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
                            borderColor: "#000",
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
                        <Text style={{color:"#000"}}>Google</Text>
          </TouchableOpacity>   
      </View>
      {/*  */}
   
      </ScrollView>            
    </SafeAreaView>
  )
}

export default signup