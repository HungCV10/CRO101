import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  View, Text, Button
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home = ({navigation}: any)=>{
  return(
    <View >
      <Text>Đây là màn hình home</Text>
      <Button title='Chuyển trang detail' onPress={()=>navigation.navigate("Detail", {
        name: "hung", obj:{id: 1, name: "Lan", price: 1000}
      })} />


    </View>
  )
}
const Detail = ({route, navigation}:any)=>{
  const {name, obj} = route.params;

  return(
    <View >
      <Text>{name}</Text>
      <Text>{obj.name}</Text>
      <Text>{obj.price}</Text>
      <Button title='Chuyển Product' onPress={()=>navigation.navigate("Product")} />

    </View>
  )
}

const Product = ({route, navigation}:any)=>{
  const {name1, price1} = route.params;

  return(
    <View >
      <Text>{name1}</Text>
      <Text>{price1}</Text>
      <Button title='Chuyển Home' onPress={()=>navigation.navigate("Home")} />

    </View>
  )
}
const stackDemo = createNativeStackNavigator();

const App= () => {
  return (
    <NavigationContainer>
      <stackDemo.Navigator>
          <stackDemo.Screen name='Home' component={Home} ></stackDemo.Screen>
          <stackDemo.Screen name='Detail' component={Detail} ></stackDemo.Screen>
          <stackDemo.Screen name='Product' component={Product} initialParams={{name1:'xe may',price1:40000}}  ></stackDemo.Screen>

      </stackDemo.Navigator>    
    </NavigationContainer>
  );
}
export default App