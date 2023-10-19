import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet ,onPress,Pressable,Image,TouchableOpacity} from 'react-native';

// bạn đã có một danh sách bạn bè (friendsList) dưới dạng mảng đối tượng
const friendsList = [
  { id: '1', name: 'Vũ Đức Nam', mutualfriends: '3 bạn chung',source:require('./image/z4731813054216_94963b047a2eb469894ba60e1ae9eb29.jpg'),more:require('./image/more_208px.png')},
  { id: '2', name: 'Bùi Xuân Vinh',mutualfriends: '22 bạn chung',source:require('./image/z4731809707569_ef88c888d9686ed1213b8475dd2a5a53.jpg'),more:require('./image/more_208px.png') },
  { id: '3', name: 'Vũ Thế Mạnh',mutualfriends: '40 bạn chung',source:require('./image/z4731810377297_32eb629c6db8e023ead5454790b058bb.jpg'),more:require('./image/more_208px.png') },
  { id: '4', name: 'Lã Tiến Anh',mutualfriends: '20 bạn chung',source:require('./image/z4731810383308_1b817be2bb7fbf75dd54bcf1b30be2d5.jpg'),more:require('./image/more_208px.png') },
  { id: '5', name: 'Nguyễn Văn Thái',mutualfriends: '30 bạn chung',source:require('./image/z4731810467593_350435a4dc97de97f786917ce0b8119d.jpg'),more:require('./image/more_208px.png') },
  { id: '6', name: 'Vũ Đức Thắng',mutualfriends: '50 bạn chung',source:require('./image/z4731813054103_33d346dc707f912a7a1c84949fb39f8d.jpg'),more:require('./image/more_208px.png') },
  { id: '7', name: 'Đào Văn Triệu',mutualfriends: '43 bạn chung',source:require('./image/7.jpg'),more:require('./image/more_208px.png') },
  { id: '8', name: 'Phạm Đình Nguyên',mutualfriends: '25 bạn chung',source:require('./image/4.jpg'),more:require('./image/more_208px.png') },
  { id: '9', name: 'Nguyễn Tường Vy',mutualfriends: '14 bạn chung',source:require('./image/vecteezy_happy-young-man-smiling_24095208_986.png'),more:require('./image/more_208px.png') },
  { id: '10',name: 'Trương Quang Duy',mutualfriends: '55 bạn chung',source:require('./image/man_facepalming_256px.png'),more:require('./image/more_208px.png') },
  { id: '11', name: 'Vũ Minh Đạo',mutualfriends: '45 bạn chung',source:require('./image/hell0.jpg'),more:require('./image/more_208px.png') },
  // Thêm bạn bè khác vào danh sách
];

export default function FriendListScreen({navigation}) {
  const handleIconPress = () => {
    navigation.navigate('addfriend');
 };
  const [searchText, setSearchText] = useState('');
  const filteredFriends = friendsList.filter((friend) =>
    friend.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
        <View style={{flexDirection: "row", justifyContent: "space-between", marginVertical: 3,marginTop:10,borderBottomWidth:0.5}} >
            <Text style={{marginLeft:10,marginTop:40,marginBottom:-15 ,fontSize:30}}> Bạn bè</Text>
            <Image source={require("./image/friend.png")} style={{ height: 140,width: 140,marginRight:10}} 
            resizeMode='contain'/>
        </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={handleIconPress} >
            <Image source={require("./image/go_back_480px.png")} 
            style={{marginTop:-30,marginBottom:15, marginLeft:18, height: 27,width:27}}
             resizeMode='contain'/>
        </TouchableOpacity>
        <View style={styles.count}>
            <Text style={{marginVertical:10,fontSize:20,color:"#696969"}}>302 bạn bè</Text>
                    <Pressable 
                        onPress={onPress}>
                        <Text style={{ fontSize: 16,color:"#00ff", marginLeft: 6, marginTop:14 }}>
                           Sắp xếp
                        </Text>
                    </Pressable>
        </View>
        <Text style={{marginBottom:4,color:"#000080"}}>Tìm kiếm </Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm bạn..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>
      <FlatList
        data={filteredFriends}
        keyExtractor={(item) => item.id}
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
             <View style={{justifyContent:"center"}}>
                 <Text>{item.name}</Text>
                 <Text style={{color:"#696969"}}>{item.mutualfriends}</Text>
             </View>
          </View>
              <View style={{justifyContent:"center"}}>
                 <Image 
                    source={item.more}
                    style={{ paddingTop: 5, width:20,height:20}} 
                  />
              </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:"#DFD8C8",
  },
  count:{
    flexDirection: "row", justifyContent: "space-between", marginVertical: 3
  },
  searchContainer: {
    marginBottom: 30,
    marginTop:-25
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom:-5
  },
  friendItem: {
    flexDirection: "row", justifyContent: "flex-start",
     marginVertical: 3
  },
});
