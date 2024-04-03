import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  Button
} from 'react-native';

const ScrollViewComponent = () => {
    const scrollViewRef = useRef();
    const scrollToTop = () => {
        // Cuộn đến đầu ScrollView
        scrollViewRef.current.scrollTo({ y: 500, animated: true });
      };
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}
        // // cuộn ngang
        ref={scrollViewRef} // Tham chiếu đến ScrollView
      >
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
         
        </Text>
        <View style={styles.buttonContainer}>
        <Button  title='onTop' onPress={scrollToTop}>Top</Button>
      </View>
      </ScrollView>
      
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    
  },
  text: {
    fontSize: 35,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
});

export default ScrollViewComponent;