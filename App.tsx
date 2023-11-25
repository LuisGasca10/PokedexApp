
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MyTabs } from './src/navigation/Tabs';


function App(): JSX.Element {

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}



export default App;
