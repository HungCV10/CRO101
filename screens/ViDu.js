import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
// *useState import từ reat
const ViDu = () => {
    const [name, setName] = useState("");// giá trị mặc định
    const [phone, setPhone] = useState("");
    const [pass, setPass] = useState("");
    return (
        <View
            style={{
                backgroundColor: 'blue',
                height: 200,
                width: 200,
                alignSelf: 'center',
                marginTop: 10
            }}
        >
            <Text
                style={{ color: 'red' }}
            >ViDu</Text>
            <Text>{name}</Text>
            <Text>{phone}</Text>
            <Text>{pass}</Text>
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder='Nhập vào tên'
            ></TextInput>
            <TextInput
                value={phone}
                onChangeText={setPhone}
                placeholder='Nhập vào phone'
            ></TextInput>
            <TextInput
                value={pass}
                onChangeText={setPass}
                placeholder='Nhập vào pass'
            ></TextInput>
        </View>
    )
}

export default ViDu