import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Button, StyleSheet, TouchableOpacity,Image ,Pressable,onPress} from 'react-native';

const newfriend = [
  {id: '1', name: 'Trần Đức Việt', mutualfriends: '6 bạn chung',source:require('./image/mixi.jpg')},
  {id: '2', name: 'Phạm Đức Thành', mutualfriends: '12 bạn chung',source:require('./image/mixi.jpg')},
  {id: '3', name: 'Trần Việt Anh', mutualfriends: '33 bạn chung',source:require('./image/mixi.jpg')},
  {id: '4', name: 'Lung Thị Linh', mutualfriends: '26 bạn chung',source:require('./image/mixi.jpg')},
  {id: '5', name: 'Tài Ca Ba', mutualfriends: '1 bạn chung',source:require('./image/mixi.jpg')},
  {id: '6', name: 'Voi Dak Lak', mutualfriends: '2 bạn chung',source:require('./image/mixi.jpg')},
  {id: '8', name: 'Trần Thái Linh', mutualfriends: '17 bạn chung',source:require('./image/mixi.jpg')},
  {id: '9', name: 'Lâm Đình Khoa', mutualfriends: '22 bạn chung',source:require('./image/mixi.jpg')},
  {id: '10', name: 'Nguyễn Văn Tài', mutualfriends: '8 bạn chung',source:require('./image/mixi.jpg')},
  {id: '11', name: 'Phùng Thanh Độ', mutualfriends: '45 bạn chung',source:require('./image/mixi.jpg')},

]

export default function addfriend ({navigation}) {
  //  Xử lý chuuyen trang
  const handleIconPress = () => {
    navigation.navigate('listfriend');
 };
  //  
  return (
    <View style={styles.container}>
    <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 3,marginTop:10,borderBottomWidth:0.5}} >
            <Text style={{marginLeft:10,marginTop:20,marginBottom:-15 ,fontSize:30}}> Bạn bè</Text>
            <Image source={require("./image/team_500px.png")} style={{ height: 140,width: 140,marginRight:10}} 
            resizeMode='contain'/>
        </View>
        <TouchableOpacity 
        onPress={handleIconPress}
        style={styles.button} >
              <Text style={styles.buttonText}>
                Bạn bè
              </Text>
         </TouchableOpacity>
         {/*  */}
         <View style={styles.count}>
            <Text style={{marginVertical:10,fontSize:18,color:"#696969"}}> Lời mời kết bạn <Text style={{color:"red"}}>65</Text></Text>
                    <Pressable 
                        onPress={onPress}>
                        <Text style={{ fontSize: 16,color:"#00ff", marginLeft: 6, marginTop:14 }}>
                           Xem tất cả
                        </Text>
                    </Pressable>
        </View>
{/*  */}
        <FlatList
          data = {newfriend}
          keyExtractor={(item)=>item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={{ padding: 10,
              borderWidth: 1,
              borderColor: '#696969',
              borderRadius:20,
              marginBottom: 10,flexDirection: "row", justifyContent: "space-between", marginVertical: 3}}>
            <View style={styles.friendItem}>
                <View style={{marginRight:15}}> 
                <Image
                  source={item.source}
                  style={{ paddingTop: 15, width:80,height:80,borderRadius: 70,borderWidth: 1,borderColor:"black", overflow:"hidden"}} 
                  resizeMode='contain'/>
                </View>
                   <View style={{justifyContent:"center",marginLeft:-8}}>

                      <View style={{marginLeft:10}}>
                         <Text style={{fontWeight:"700",fontSize:17}}>{item.name}</Text>
                         <Text style={{color:"#696969"}}>{item.mutualfriends}</Text>
                      </View>

                       <View style={{flexDirection: "row" ,justifyContent:"space-around", marginVertical: 4}}>
                        <TouchableOpacity style={{backgroundColor: '#5f9ea0',
                               borderRadius:5, width:110,marginLeft:10, height:25}}
                                onPress={onPress}>
                         <Text style={{textAlign:"center",marginTop:2}}>Thêm bạn</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor: '#f08080',
                               borderRadius:5, width:110,marginLeft:10, height:25}}
                                onPress={onPress}>
                         <Text style={{textAlign:"center",marginTop:2}}>Xóa</Text>
                        </TouchableOpacity>
                       </View>
                   </View> 
             </View>
            </TouchableOpacity>
          )}
         />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop:40,
    backgroundColor:"#DFD8C8",
  }, 
  button: {
    backgroundColor: '#fff', 
    marginTop:-70,
    marginLeft:19,
    borderRadius:20,
    borderColor: "black",
    borderWidth:2,
    width:70,
    height:37
  },
  buttonText: {
    color: '#000', 
    fontWeight: 'bold', 
    marginTop:5.5,
    fontSize: 15, 
    textAlign: 'center', 
  },
   count:{
    flexDirection: "row", justifyContent: "space-between", marginVertical: 3,
    marginTop:30
  },
   friendItem: {
    flexDirection: "row", justifyContent: "flex-start",
     marginVertical: 3
  },
});


