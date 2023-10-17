import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import profile from './profile'; 
import setting from './setting'; 
import signup from './signup';
import forgotpass from './forgotpass';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="profile" screenOptions={{headerShown:false}}>
        <Stack.Screen name="profile" component={profile} />
        <Stack.Screen name="setting" component={setting} />
        <Stack.Screen name="signup" component={signup} />
        <Stack.Screen name="forgotpass" component={forgotpass} />    
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
