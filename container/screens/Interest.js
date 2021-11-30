import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

import LoginImage from '../assets/Login.jpg';
import {Dimensions} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

// const width = Dimensions.get('window').width;
// const height = width * 0.6;

const images = [{LoginImage}, {LoginImage}, {LoginImage}];

const Interest = ({navigation}) => {
  const [active, setActive] = useState(0);

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{justifyContent: 'space-around', height: 500}}>
          <View style={styles.container}>
            <View style={styles.input}>
              <TextInput placeholder="Enter your mobile number or email"></TextInput>
            </View>
            <View>
              <View style={styles.input}>
                <TextInput
                  style={{width: '95%'}}
                  placeholder="Enter password"></TextInput>
                <Ionicons name="eye" size={20} color="black" />
              </View>
            </View>

            <TouchableOpacity style={{alignSelf: 'center'}}>
              <Text style={styles.register}>Forget your password ?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <TouchableOpacity style={{alignSelf: 'center'}}>
              <Text style={styles.register}>Register</Text>
            </TouchableOpacity>
            <Button
              title="Login"
              color="#485ba7"
              onPress={() => navigation.navigate('Home', {name: 'Home'})}
              style={styles.button}></Button>
            <TouchableOpacity style={{alignSelf: 'center'}}>
              <Text style={styles.register}>Terms and condition</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Interest;

const styles = StyleSheet.create({
  screen: {
    width: width,
    height: height,
  },
  container: {
    justifyContent: 'space-evenly',
    padding: 20,
    height: 180,
  },

  SliderImage: {
    width: width,
  },
  register: {
    borderBottomWidth: 1,
    color: '#4090ff',
    fontSize: 13,

    borderBottomColor: '#4090ff',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 15,
  },

  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 2,
    alignSelf: 'center',
  },
  pagingText: {
    fontSize: width / 30,
    color: '#888',
    margin: 4,
  },
  pagingActiveText: {
    fontSize: width / 30,
    color: '#fff',
    margin: 4,
  },
});
