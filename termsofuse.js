import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';

const TermsOfServiceScreen = () => {
  return (
    <View style={styles.container}>
        <ScrollView>
      <Text style={styles.title}>Điều Khoản Sử Dụng</Text>
      <Text style={styles.paragraph}>
        Chào mừng bạn đến với ứng dụng mạng xã hội của chúng tôi. Trước khi bạn bắt đầu sử dụng ứng dụng, hãy đọc kỹ và đồng ý với các <Text style={styles.bold}>điều khoản sử dụng</Text> sau đây.
      </Text>
      <Text style={styles.paragraph}>
       <Text style={{fontWeight:500}}>1. Điều khoản sử dụng:</Text> 
        {'\n'}
        <Text style={{fontWeight:500}}>- Tài khoản người dùng:</Text> Để sử dụng dịch vụ của chúng tôi, bạn cần tạo một tài khoản cá nhân. Bạn chịu trách nhiệm bảo mật thông tin đăng nhập của mình.
        {'\n'}
        <Text style={{fontWeight:500}}>- Nội dung người dùng:</Text> Bạn không được đăng nội dung vi phạm bản quyền, thông tin cá nhân của người khác hoặc nội dung không phù hợp. Chúng tôi có quyền xóa nội dung vi phạm.
        {'\n'}
        <Text style={{fontWeight:500}}>- Quyền riêng tư:</Text> Chúng tôi cam kết bảo vệ quyền riêng tư của bạn và thu thập thông tin cá nhân của bạn theo chính sách quyền riêng tư.
        {'\n'}
      </Text>
      <Text style={styles.paragraph}>
      <Text style={{fontWeight:500}}>2. Quản lý tài khoản:</Text>
        {'\n'}
        <Text style={{fontWeight:500}}>- Chấm dứt tài khoản:</Text> Chúng tôi có quyền chấm dứt tài khoản người dùng nếu bạn vi phạm các điều khoản sử dụng hoặc gây ra hành vi không phù hợp.
        {'\n'}
        <Text style={{fontWeight:500}}>- Bảo mật tài khoản:</Text>Bạn cần bảo mật thông tin đăng nhập và không chia sẻ tài khoản với người khác.
        {'\n'}
      </Text>
      <Text style={styles.paragraph}>
      <Text style={{fontWeight:500}}>3. Điều khoản cuối cùng:</Text> 
        {'\n'}
        <Text style={{fontWeight:500}}>- Sự thay đổi</Text> Chúng tôi có quyền sửa đổi điều khoản sử dụng và bạn sẽ được thông báo về các thay đổi này.
        {'\n'}
        <Text style={{fontWeight:500}}>- Liên hệ:</Text> Nếu bạn có bất kỳ câu hỏi hoặc phản ánh về điều khoản sử dụng, hãy liên hệ với chúng tôi để được giải đáp.
      </Text>
      <Text style={styles.paragraph}>
        {' '}
        Đọc kỹ và tuân theo các <Text style={styles.bold}>điều khoản sử dụng</Text> là quan trọng để đảm bảo mọi người có trải nghiệm an toàn và tích cực khi sử dụng ứng dụng mạng xã hội của chúng tôi. Cảm ơn bạn đã tham gia vào cộng đồng của chúng tôi và tuân theo các quy định này.
      </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop:20
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 2,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default TermsOfServiceScreen;
