import { View, Text, FlatList, Button, Alert, TextInput, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'


const CRUD = () => {

    // khai báo list, đây sẽ là nơi nhận dữ liệu từ server
    const [list, setList] = useState([])


    const [nameSP, setNameSP] = useState("")
    const [priceSP, setPriceSP] = useState("")
    const [editModal, setEditModal] = useState(false)
    
    const apiUrl = "http://10.0.3.2:3000/product";

    useEffect(()=>{
        console.log("test")
        getList()
    }, []);

    // lay du lieu
    const getList = ()=>{
        fetch(apiUrl, {
            method: "GET"
        }).then(res =>res.json()) // chuyển đổi thành đối tượng json
        .then(data =>{
            console.log(data) // test kết quả xem đã hiển thị chưa
            setList(data) // khi đã có dữ liệu thì set vào list
        }).catch(err =>{
            console.log(err)
        })
    }

    // xoa 1 ban ghi
    const deleteItem = (id)=>{
        fetch(`${apiUrl}/${id}`, {
            method: "DELETE"
        }).then(res =>{
            Alert.alert("xoa thanh cong")
            getList()
        }).catch(err =>{
            console.log(err)
        })
    }

        // them 1 ban ghi
        const addItem = ()=>{
            fetch(apiUrl, {
                method: "POST",
                body: JSON.stringify({
                    "name": nameSP,
                    "price": priceSP
                })
            }).then(res =>{
                Alert.alert("Them thanh cong")
                getList()
            }).catch(err =>{
                console.log(err)
            })
        }

        // sửa bản ghi
        const editItem = (id)=>{
            fetch(`${apiUrl}/${id}`, {
                method: "PUT",
                body: JSON.stringify({
                    "name": nameSP,
                    "price": priceSP
                })
            }).then(res =>{
                Alert.alert("sua thanh cong")
                getList()
            }).catch(err =>{
                console.log(err)
            })
        }

    const renderItem =({item})=>{

        return (
            <View>
                <Text> Name: {item.name} ---Price: {item.price}</Text>
                <Button title='Delete' onPress={()=>deleteItem(item.id)} />
                <Button title='Edit' onPress={()=>{setEditModal(true)
                                                    id = item.id 
                                                    setNameSP(item.name)
                                                    setPriceSP(item.price)}} />
            </View>
        )
    }

  return (
    <View>
        <View>
            <TextInput placeholder='Name' onChangeText={(text)=>setNameSP(text)}/>
            <TextInput placeholder='Price' onChangeText={(text)=>setPriceSP(text)}/>
            <Button title='them' onPress={()=>{addItem()}}/>
        </View>
        
      <FlatList 
            data={list} renderItem={renderItem} keyExtractor={item => item.id.toString()}>

      </FlatList>

      <Modal visible= {editModal} > 
            <TextInput placeholder='Name' value= {nameSP} onChangeText={(text)=>setNameSP(text)} />
            <TextInput placeholder='Price' value= {priceSP} onChangeText={(text)=>setPriceSP(text)}/>
            <Button title='Sửa' onPress={()=>{setEditModal(false)
                                                editItem(id)
          }}/>

      </Modal>
    </View>
  )
}

export default CRUD