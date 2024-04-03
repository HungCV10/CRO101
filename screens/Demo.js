import { View, Text, TextInput, Image } from 'react-native'
import React, { useState } from 'react'

export const Demo = () => {
    const [name, setName] = useState('');// giá trị mặc định là rỗng
    const [phone, setPhone] = useState('');
    const [pass, setPass] = useState('');

    //có thể sử dụng hàm
    const Update = (name) => {
        setName(name);
    };
    return (

        <View>
            <Text>{name}</Text>
            <TextInput
                value={name}
                onChangeText={Update}
                placeholder='Nhập họ tên'
            >
            </TextInput>

            <TextInput
                value={phone}
                onChangeText={setPhone}
                placeholder='Nhập sđt'
            >
            </TextInput>

            <TextInput
                value={pass}
                onChangeText={setPass}
                placeholder='Nhập Pass'
            >
            </TextInput>

            <Image
                style={{ width: 200, height: 200, alignSelf: 'center' }}
                source={{
                    uri: 'https://cdn.honda.com.vn/automobiles/July2023/y7gDmu9NFnawre66iwKx.png'

                }}></Image>

            <Image
                style={{ width: 200, height: 200, alignSelf: 'center' }}
                source={require('../images/oto.jpg')}   
            />


        </View>
    )
}

