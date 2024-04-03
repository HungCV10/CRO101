import { View, Text,Modal, FlatList, TextInput, Button, Alert, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'


const App = () => {
    const [list, setList] = useState([]);
    const [nameSP, setTenSP] = useState("");
    const [priceSP, setPriceSP] = useState(0);
    const [deleteColor, setDeleteColor] = useState("#007bff"); 
    const [editingItem, setEditingItem] = useState(null); // State để lưu thông tin sản phẩm đang chỉnh sửa
    const [editModalVisible, setEditModalVisible] = useState(false); // State để điều khiển hiển thị Modal chỉnh sửa

    useEffect(() => {
        console.log("ok");
        getList();
    }, []);

    const getList = () => {
        fetch("http://10.0.3.2:3000/product", 
            { method: "GET" }
        ).then(res => res.json())
        .then(data => {
            console.log(data);
            setList(data);
        }).catch(err => {
            console.log(err);
        });
    };

    const btnDelete = (id) => {
        fetch(`http://10.0.3.2:3000/product/${id}`, 
            { method: "DELETE" }
        ).then(res => {
            Alert.alert("xóa thành công");
            getList(); 
        }).catch(err => {
            console.log("Lỗi: ", err);
          
        });
    };

    const btnAdd = ()=>{
        fetch("http://10.0.3.2:3000/product", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name": nameSP,
                "price": priceSP
            })})
            .then(res => res.json())
            .then(data => {
                console.log(data);
                getList()
            }).catch(err => {
                console.log(err);
            })          
    }

    // sửa
    const btnEdit = () => {
        fetch(`http://10.0.3.2:3000/product/${editingItem.id}`, {
            method: "PUT",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name": nameSP,
                "price": priceSP
            })
        }).then(res => res.json())
        .then(data => {
            console.log(data);
            setEditModalVisible(false);
            getList();
        }).catch(err => {
            console.log(err);
        }) 
    }

    const renderItem = ({ item }) => {
        return (
            <View style={{padding: 10, margin: 10}}>
                <Text>Tên: {item.name} -- Giá: {item.price}</Text>
                <View>
                    <Button 
                        title='Xóa' 
                        onPress={() => btnDelete(item.id)} 
                        color={deleteColor} 
                        onPressIn={() => setDeleteColor("#dc3545")} 
                        onPressOut={() => setDeleteColor("#007bff")} 
                    />
                     <Button 
                        title='Chỉnh sửa' 
                        onPress={() => {
                            setEditingItem(item); 
                            setTenSP(item.name); // Đặt giá trị mặc định cho TextInput
                            setPriceSP(item.price.toString()); // Đặt giá trị mặc định cho TextInput
                            setEditModalVisible(true); // Mở Modal chỉnh sửa
                        }} 
                    />
                </View>
                
            </View>
        );
    };

    return (
        <ScrollView >
        <View >
            <View >
                <Text>Thêm sản phẩm</Text>
                <TextInput 
                    placeholder='Tên sản phẩm' 
                    onChangeText={(text)=>setTenSP(text)}/>
                <TextInput 
                    placeholder='Giá sản phẩm' 
                    onChangeText={(text)=>setPriceSP(text)}/>
                <Button title='add' onPress={btnAdd}/>
            </View>

            <FlatList 
                data={list}
                renderItem={renderItem}
                keyExtractor={itemSP => itemSP.id
                }
            />
             <Modal
                    animationType="slide"
                    transparent={true}
                    visible={editModalVisible}
                    onRequestClose={() => {
                        setEditModalVisible(false);
                    }}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'while' }}>
                        <View 
                            style={{
                                width: 300,
                                height:400, 
                                backgroundColor: '#7FC750',   
                                padding: 20, 
                                borderRadius: 10 }}>
                            <Text>Tên sản phẩm</Text>
                            <TextInput 
                                placeholder="Tên sản phẩm"
                                onChangeText={(text) => setTenSP(text)}
                                value={nameSP}
                            />
                            <Text>Giá sản phẩm</Text>
                            <TextInput 
                                placeholder="Giá sản phẩm"
                                onChangeText={(text) => setPriceSP(text)}
                                value={priceSP}
                            />
                            <Button title="Lưu" onPress={btnEdit} />
                            <Button title="Đóng" onPress={() => setEditModalVisible(false)} />
                        </View>
                    </View>
                </Modal>
        </View>
        </ScrollView>
    );
};

export default App;
