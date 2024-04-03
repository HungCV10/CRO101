import { View, Text } from 'react-native'
import React from 'react'

 const ViewComponent = () => {
  return (
    <View
      style={{
        backgroundColor: 'blue',
        height: 200,
        width: 200,
        alignSelf: 'center',
        marginTop:20
      }}
    >
        <Text
          style={{
            color:'red'
          }}
        >Đây là cách sử dụng text</Text>
      
    </View>
    
  )
}

export default ViewComponent