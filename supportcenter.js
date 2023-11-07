import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SupportCenterScreen = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Trung Tâm Hỗ Trợ</Text>
      <Text style={styles.paragraph}>
        Chào mừng bạn đến với Trung tâm hỗ trợ của chúng tôi! Tại đây, chúng tôi cam kết cung cấp cho bạn mọi thông tin và giúp đỡ cần thiết để tận hưởng trọn vẹn ứng dụng mạng xã hội của chúng tôi.
      </Text>
      <Text style={styles.paragraph}>
        {' '}
        <Text style={{fontWeight:600}}>Những dịch vụ chúng tôi cung cấp:</Text>
        {'\n'}
        <Text style={{fontWeight:500}}> - Hướng dẫn sử dụng: </Text> Chúng tôi cung cấp tài liệu học tập, bài viết và hướng dẫn về các chủ đề liên quan đến mạng xã hội, an toàn trực tuyến và quyền riêng tư.
        Chúng tôi cung cấp hướng dẫn chi tiết về cách sử dụng ứng dụng, từ cách tạo tài khoản đến cách tương tác với các tính năng chính.
        {'\n'}
       <Text style={{fontWeight:500}}> - Giải quyết vấn đề: </Text> Nếu bạn gặp phải bất kỳ vấn đề nào trong quá trình sử dụng ứng dụng, chúng tôi sẽ hỗ trợ bạn giải quyết vấn đề đó một cách nhanh chóng và hiệu quả.
        {'\n'}
        <Text style={{fontWeight:500}}> - Tài liệu học tập: </Text> Chúng tôi cung cấp tài liệu học tập, bài viết và hướng dẫn về các chủ đề liên quan đến mạng xã hội, an toàn trực tuyến và quyền riêng tư.
        {'\n'}
        <Text style={{fontWeight:500}}> - Cộng đồng hỗ trợ: </Text> Bạn có thể tham gia vào cộng đồng hỗ trợ của chúng tôi để chia sẻ kinh nghiệm và học hỏi từ những người dùng khác.
      </Text>
      <Text style={styles.paragraph}>
        {' '}
        Chúng tôi luôn sẵn sàng để hỗ trợ bạn. Hãy tìm kiếm thông tin bạn cần hoặc liên hệ với chúng tôi trực tiếp nếu bạn cần sự hỗ trợ cá nhân. Cảm ơn bạn đã sử dụng ứng dụng của chúng tôi và chúng tôi hy vọng bạn có một trải nghiệm tuyệt vời!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    marginTop:10,

    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight:22
  },
});

export default SupportCenterScreen;
