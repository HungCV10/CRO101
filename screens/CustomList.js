import React from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

let duLieu = [
    {name:'dien thoai', price: 30},
    {name:'tivi', price: 30},
    {name:'maytinh', price: 30}
   
  ]
  
const ItemDulieu = (props)=>{
    // console.log(props);
    return (
      <View>
        <Text>Name: {props.name} -- price: {props.price}</Text>
      </View>
    );
  }
  

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const CustomList = () => {
  return (
    <View> 
    <View style={{margin:20}} />
    <ScrollView style={{height:'100%', backgroundColor:"green"}}>
    {
        duLieu.map( (item, index)=>{
          // console.log(item);
          return <ItemDulieu key={index} name={item.name} price={item.price} />
          // cần có key để tránh trùng lặp
        })
    }
    </ScrollView>
    
</View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'gray',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default CustomList;