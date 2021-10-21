import React from "react";
import LoginRegister from "../screens/LoginRegister";
import Login from '../screens/Login'
import Register from "../screens/Register";
import Home from "../screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >  
        <Stack.Screen options={{headerShown:false}} name="LoginRegister"  component={LoginRegister} />
        <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown:false}} name="Register" component={Register} />
        <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
