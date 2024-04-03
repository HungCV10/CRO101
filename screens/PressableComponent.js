import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const PressableComponent = () => {
  const handlePress = () => {
    console.log('Button pressed!');
  };

  return (
    <Pressable onPress={handlePress} style={styles.button}>
      {/* onPress: Nhấn button sau đó gọi hàm handlePress */}
      <Text style={styles.text}>Press Me</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
        margin: 20
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
    });

export default PressableComponent;