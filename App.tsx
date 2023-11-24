/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MyStack } from './src/navigation/StackNavigator';


function App(): JSX.Element {

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}



export default App;
