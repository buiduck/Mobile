// StudentList.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

function ClassList() {
 {/* const [students, setStudents] = useState([]);

  useEffect(() => {
    // Gọi API và cập nhật danh sách lớp
    axios.get('http://192.168.0.109:3000/api/class/')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <View>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.id}</Text>
            <Text>Giáo viên chủ nhiệm : {item.supervising_Teacher}</Text> // Hiển thị các thông tin khác của lớp học 
          </View>
        
        )}
      />
    </View>
        ); */}
        const [classLists, setClassLists] = useState([]);
        const [currentPage, setCurrentPage] = useState(1);
        const itemsPerPage = 10; // Số lượng mục mỗi trang
        const renderListItem = ({ item }) => {
          return <View style={{ padding: 10 }}><Text>{item}</Text></View>;
        };
      
        const handleNextPage = () => {
          setCurrentPage(currentPage + 1);
        };
      
        const handlePrevPage = () => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
          }
        };
      
        const paginatedData = students.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
      
        useEffect(() => {
          // Gọi API và cập nhật danh sách lớp
          axios.get('http://10.0.60.171:3000/api/class/&#39')
            .then(response => {
              setClassLists(response.data);
            })
            .catch(error => {
              console.error('Error fetching data:', error);
            });
        }, []);
      
        return (
          <View>
            <FlatList
              data={paginatedData}
              renderItem={renderListItem}
              keyExtractor={(item) => item.toString()}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
              <Button title="Previous Page" onPress={handlePrevPage} disabled={currentPage === 1} />
              <Button title="Next Page" onPress={handleNextPage} disabled={currentPage * itemsPerPage >= data.length} />
            </View>
          </View>
        );
} 

export default ClassList;

