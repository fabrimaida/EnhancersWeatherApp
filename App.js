import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './Screens/Screen1.js';
import Screen2 from './Screens/Screen2.js';
import Screen3 from './Screens/Screen3.js';
import Screen4 from './Screens/Screen4.js';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Screen1'
        screenOptions={{
        headerShown: false
        }}
      >
        <Stack.Screen  name='Screen1' component={Screen1} />
        <Stack.Screen name='Screen2' component={Screen2} />
        <Stack.Screen name='Screen3' component={Screen3} />
        <Stack.Screen name='Screen4' component={Screen4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
