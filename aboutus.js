import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutUsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Về Chúng Tôi</Text>
      <Text style={styles.paragraph}>
        Chào mừng bạn đến với trang 'Về Chúng Tôi' của chúng tôi! Tại đây, chúng tôi muốn chia sẻ về nguồn gốc và mục tiêu của ứng dụng mạng xã hội của chúng tôi.
      </Text>
      <Text style={styles.paragraph}>
        {' '}
        <Text style={{fontWeight:600}}>Sứ mệnh của chúng tôi:</Text>
        {'\n'}
        <Text style={{fontWeight:500}}>- Tôn trọng:</Text> Chúng tôi đặt tôn trọng lên hàng đầu và khuyến khích mọi người tôn trọng lẫn nhau trong mọi tương tác trực tuyến.
        {'\n'}
        <Text style={{fontWeight:500}}>- An toàn:</Text> Chúng tôi cam kết bảo vệ quyền riêng tư và an toàn của người dùng.
        {'\n'}
        <Text style={{fontWeight:500}}>- Tích cực:</Text> Chúng tôi khuyến khích sự tích cực, học hỏi và thúc đẩy sự phát triển cá nhân.
      </Text>
      <Text style={styles.paragraph}>
        {' '}
        <Text style={{fontWeight:600}}>Nhóm của chúng tôi:</Text>
        {'\n'}
        - Chúng tôi là một nhóm đa dạng và đam mê, tập hợp từ nhiều lĩnh vực khác nhau. Chúng tôi là những người yêu công nghệ và tâm huyết xây dựng một cộng đồng mạng xã hội tuyệt vời.
      </Text>
      <Text style={styles.paragraph}>
        {' '}
        Chúng tôi rất vui mừng được chào đón bạn vào cộng đồng của chúng tôi và hy vọng rằng bạn sẽ có một trải nghiệm thú vị khi sử dụng ứng dụng của chúng tôi.
        {'\n'}
        Nếu bạn có bất kỳ câu hỏi hoặc phản ánh nào, xin vui lòng liên hệ với chúng tôi.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop:20,
   
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,

  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight:24
  },
});

export default AboutUsScreen;
