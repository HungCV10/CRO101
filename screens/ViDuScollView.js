import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'

const ViDuScollView = () => {
    let duLieu = [
        {id: 1, name: "Nguyễn Văn A", img : require("../images/oto.jpg")}, 
        {id: 2, name: "Nguyễn Văn b", img : require("../images/oto.jpg")}, 
        {id: 3, name: "Nguyễn Văn D", img : require("../images/oto.jpg")}, 
        {id: 4, name: "Nguyễn Văn D", img : require("../images/oto.jpg")}, 
    ]

    const renderItem = ({item})=>{
        return(
            <View>
                <Text>{item.name}</Text>
                <Image style={{width: 150, height:150}}
                        source={item.img}
                ></Image>
            </View>
        )
    }
    const key = (item)=>item.id.toString();

  return (
    <View>   
      
    <FlatList 
        data={duLieu} 
        renderItem={renderItem}
           keyExtractor={key}
     >

    </FlatList>

    </View>
  )
}

export default ViDuScollView