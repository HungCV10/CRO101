import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FlexComponent = () => {
    return (
        <View >
            <View style={styles.container}>
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          </View>

        </View>
        
    )};
    
    const styles = StyleSheet.create({
      container: {
        flexDirection: "row-reverse", 
        // nằm trên cùng 1 hàng, mặc định là theo cột column
        //row-reverse ngược lại
        justifyContent: 'space-around' // căn giữa
      },
      box1: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        marginBottom: 10,
      },
      box2: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        marginBottom: 10,
      },
      box3: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
      },
    });
export default FlexComponent
