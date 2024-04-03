import React, { useState } from 'react';
import { View, Text, Image, FlatList, RefreshControl, StatusBar, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';

const DemoList = () => {
    const [refreshing, setRefreshing] = useState(false);
    // refreshing là biến
    // setRefreshing là hàm để cập nhật biến này, ban đầu là false, không được kích hoạt


    let duLieu = [
        { name: "hung", img: 'https://cdn.honda.com.vn/automobiles/July2023/y7gDmu9NFnawre66iwKx.png' },
        { name: "hung2", img: 'https://cdn.honda.com.vn/automobiles/July2023/y7gDmu9NFnawre66iwKx.png' },
        { name: "hung3", img: 'https://cdn.honda.com.vn/automobiles/July2023/y7gDmu9NFnawre66iwKx.png' }
    ];

    const renderItem = ({ item }) => {
        return (
            <View>
                <Text>{item.name}</Text>
                <Image
                    style={{ width: 200, height: 200, alignSelf: 'center' }}
                    source={{ uri: item.img }}
                />
            </View>
        );
    };

    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false);

        }, 5000);
    }
    return (
        <View>
            <StatusBar backgroundColor="blue"
                animated={true}
                barStyle="light-content" />

            <Text>DemoList</Text>
            <FlatList   data={duLieu} 
                        renderItem={renderItem}
                        refreshControl={<RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                                colors={['blue']} // màu item load
                                />}
            />
        </View>


    );
};
const styles = StyleSheet.create({
    container: {

    }
});

export default DemoList;
