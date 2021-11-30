import React from 'react';
import LoginRegister from '../screens/LoginRegister';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import AboutUs from '../screens/AboutUs';
import ContactUs from '../screens/ContactUs';
import Feedback from '../screens/Feedback';
import Products from '../screens/Products';
import TrackHealth from '../screens/TrackHealth';
import AskQuery from '../screens/AskQuery';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="LoginRegister"
          component={LoginRegister}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AboutUs"
          component={AboutUs}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ContactUs"
          component={ContactUs}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Feedback"
          component={Feedback}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Products"
          component={Products}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="TrackHealth"
          component={TrackHealth}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AskQuery"
          component={AskQuery}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
