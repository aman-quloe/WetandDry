import React, {useEffect} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
} from 'react-native';

import {Dimensions} from 'react-native';
import LoginRegister from './container/screens/LoginRegister';
import Login from './container/screens/Login';
import Register from './container/screens/Register';
import Home from './container/screens/Home';
import AskQuery from './container/screens/AskQuery';
import Navigator from './container/Navigation/Navigator';
import Products from './container/screens/Products';
import ContactUs from './container/screens/ContactUs';
import AboutUs from './container/screens/AboutUs';

import SplashScreen from 'react-native-splash-screen';
import TrackHealth from './container/screens/TrackHealth';
import Feedback from './container/screens/Feedback';
import MenWellness from './container/screens/MenWellness';
import WomenWellness from './container/screens/WomenWellness';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#485ba7" />
      {/* <Navigator /> */}
      {/* <ContactUs /> */}
      {/* <AboutUs /> */}
      {/* <Products /> */}
      <MenWellness />
      {/* <WomenWellness /> */}
      {/* <AskQuery /> */}
      {/* <TrackHealth /> */}
      {/* <Feedback /> */}
    </>
  );
}

const styles = StyleSheet.create({});
