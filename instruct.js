import { View, Text,ScrollView,StyleSheet,SafeAreaView } from 'react-native'
import React from 'react'

const instruct = () => {
  return (
    <View style={{marginVertical:20}}> 
          <SafeAreaView>
        <ScrollView>
      <Text style={{marginHorizontal:25,marginVertical:40,fontSize:20,fontWeight:700,marginBottom:10}}>1. Nguyên tắc cơ bản</Text>
      <Text style={{fontSize:15,marginRight:10,marginLeft:20,}}>
        <Text style={{fontWeight:600,fontSize:16,}}>+ Tôn trọng: </Text>
         <Text style={{lineHeight:20}}>Khuyến khích thành viên cộng đồng tôn trọng lẫn nhau. Đảm bảo rằng mọi người đều được đối xử với sự tôn trọng và lịch sự.</Text>
      </Text>
      {/*  */}
      <Text style={{marginHorizontal:25,fontSize:20,fontWeight:700,marginBottom:10}}>
      2. Quy định và chính sách</Text>
      <Text style={{fontSize:15,marginRight:10,marginLeft:20}}>
        <Text style={{fontWeight:600,fontSize:16}}>+ Đăng ký: </Text>
        <Text style={{lineHeight:20}}> Yêu cầu người dùng đăng ký tài khoản và chấp nhận các điều khoản sử dụng trước khi tham gia cộng đồng. 
        {"\n"}
        <Text style={{fontWeight:600,fontSize:16}}>+ Nội dung cấm: </Text>
        <Text >Xác định rõ những loại nội dung cấm, ví dụ như vi phạm bản quyền, lừa đảo, kích động bạo động, hay bất kỳ hành vi nào gây tổn hại cho người khác.</Text>
         </Text>
      </Text>
      {/*  */}
      <Text style={{marginHorizontal:25,fontSize:20,fontWeight:700,marginBottom:10}}>
      3. Quản lý nội dung</Text>
      <Text style={{fontSize:15,marginRight:10,marginLeft:20,}}>
        <Text style={{fontWeight:600,fontSize:16}}>+ Báo cáo và xóa: </Text>
        <Text style={{lineHeight:20}}>Cung cấp công cụ báo cáo nội dung xấu hoặc vi phạm quy định. Có một đội ngũ quản lý để kiểm tra và xử lý các báo cáo này.
        {"\n"}
        <Text style={{fontWeight:600,fontSize:16}}>+ Kiểm duyệt nội dung: </Text>
        <Text>Kiểm duyệt nội dung trước khi nó được công bố nếu cần thiết để đảm bảo tính an toàn và phù hợp.</Text>
         </Text>
      </Text>
      {/*  */}
      <Text style={{marginHorizontal:25,fontSize:20,fontWeight:700,marginBottom:10}}>
      4. Giáo dục và nhận thức</Text>
      <Text style={{fontSize:15,marginRight:10,marginLeft:20,}}>
        <Text style={{fontWeight:600,fontSize:16}}>+ Hướng dẫn người dùng:  </Text>
        <Text style={{lineHeight:20}}>Cung cấp tài liệu hướng dẫn và hỗ trợ về việc sử dụng ứng dụng và tham gia cộng đồng.
        {"\n"}
        <Text style={{fontWeight:600,fontSize:16}}>+ Chương trình đào tạo: </Text>
        <Text>Tổ chức các chương trình đào tạo về an toàn trực tuyến và quyền riêng tư.</Text>
         </Text>
      </Text>
      {/*  */}
      <Text style={{marginHorizontal:25,fontSize:20,fontWeight:700,marginBottom:10}}>
      5. Xây dựng cộng đồng tích cực</Text>
      <Text style={{fontSize:15,marginRight:10,marginLeft:20,}}>
        <Text style={{fontWeight:600,fontSize:16}}>+ Khuyến khích tích cực:   </Text>
        <Text style={{lineHeight:20}}>Động viên người dùng tham gia vào hoạt động xây dựng và tích cực, ví dụ như đăng nội dung giúp động viên và chia sẻ kiến thức.
        {"\n"}
        <Text style={{fontWeight:600,fontSize:16}}>+ Tạo ra không gian an toàn:  </Text>
        <Text>Đảm bảo rằng cộng đồng của bạn là một nơi an toàn để người dùng có thể thể hiện ý kiến một cách tự do và thoải mái.</Text>
         </Text>
      </Text>
      </ScrollView>
      </SafeAreaView>     
    </View>
  )
}

export default instruct