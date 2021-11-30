import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView,
  ImageBackground,
} from 'react-native';

import LoginImage from '../assets/img15.png';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

import logo from '../assets/logo2.png';
import img from '../assets/img10.png';
import banner from '../assets/9.png';
import imagemen from '../assets/image-men.png';
import anxiety from '../assets/02.png';
import allergies from '../assets/03.png';
import sunburn from '../assets/05.png';
import menstruation from '../assets/04.png';
import kalpana from '../assets/img16.png';
import sumit from '../assets/img17.png';
import yashvant from '../assets/img18.png';
import jasmine from '../assets/img19.png';
import social from '../assets/img015.png';
import hremoval from '../assets/img20.png';
import instagram from '../assets/instagram.png';
import queryimage from '../assets/5.png';

import Evillcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Card} from 'react-native-shadow-cards';
import LinearGradient from 'react-native-linear-gradient';

const images = [{LoginImage}, {LoginImage}, {LoginImage}];

const WomenWellness = ({navigation}) => {
  const [active, setActive] = useState(0);

  const change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      setActive(slide);
    }
  };
  return (
    <>
      <View style={styles.screen}>
        <View style={styles.header}>
          <View
            style={{
              height: 80,
              justifyContent: 'space-between',
              paddingBottom: 10,
            }}>
            <Entypo name="menu" color="grey" size={40} />
            <View style={{width: width / 3.8}}>
              <TouchableOpacity
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Evillcons name="location" size={24} color="#485ba7" />

                <Text style={{fontWeight: '600', color: 'black'}}>Noida</Text>
                <AntDesign name="down" size={20} color="grey" />
              </TouchableOpacity>
            </View>
          </View>
          <Image
            source={logo}
            style={{width: 50, height: 41, resizeMode: 'contain'}}></Image>
          {/* <TouchableOpacity>
          <AntDesign name="user" color="#ffff" size={26} />
        </TouchableOpacity> */}
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{alignItems: 'center'}}>
            <View style={{alignItems: 'center', paddingHorizontal: 10}}>
              <View style={{width: 348, height: 160, margin: 10}}>
                <ImageBackground
                  source={banner}
                  style={{
                    width: '100%',
                    height: 150,
                    resizeMode: 'cover',
                    justifyContent: 'center',
                  }}>
                  <View style={{width: '40%', alignItems: 'center'}}>
                    <Text
                      style={{
                        width: 101,
                        color: 'black',
                        fontSize: 12,

                        padding: 4,
                        fontWeight: '900',
                      }}>
                      Women Wellness
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 8,
                        marginLeft: '12%',
                        padding: 2,
                      }}>
                      Lorem Ipsum is simply dummy text of the printing
                    </Text>
                    <TouchableOpacity
                      style={{
                        margin: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: 'black',
                        borderRadius: 8,
                        width: '70%',
                        height: 30,
                      }}>
                      <Text style={{fontSize: 8, fontWeight: '700'}}>
                        Post Your Questions
                      </Text>
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              </View>

              <View
                style={{
                  display: 'flex',
                  alignSelf: 'flex-start',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Card
                  style={{
                    height: 42,
                    marginHorizontal: 15,
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                    borderRadius: 5,
                    width: '36%',
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <TextInput placeholder="Latest"></TextInput>
                  <View style={{flexDirection: 'row'}}>
                    <AntDesign name="down" size={16} color="grey" />
                  </View>
                </Card>
                <AntDesign name="search1" size={24} color="grey" />
              </View>

              <TouchableOpacity
                style={{
                  backgroundColor: '#ee5d97',
                  width: width / 1.18,

                  height: 30,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 20,
                }}>
                <Text style={{color: '#fff', fontWeight: '700'}}>Topics</Text>
              </TouchableOpacity>

              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <View style={{alignItems: 'center'}}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#5a90ce', '#5472b8', '#495baa']}
                    style={{
                      alignItems: 'center',
                      width: width / 3.5,
                      height: 120,
                      padding: 15,
                      margin: 20,
                      borderRadius: 10,
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 3,
                      },
                      shadowOpacity: 0.29,
                      shadowRadius: 4.65,
                      elevation: 7,
                    }}>
                    <Image
                      source={anxiety}
                      style={{
                        width: 50,
                        height: 50,
                        resizeMode: 'contain',
                        margin: 5,
                      }}></Image>
                    <Text
                      style={{
                        fontWeight: '600',
                        color: '#ffff',
                        fontSize: 13,
                        margin: '15%',
                      }}>
                      Anxiety
                    </Text>
                  </LinearGradient>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('AskQuery', {name: 'AskQuery'})
                    }
                    style={{
                      backgroundColor: '#25aade',
                      width: 70,
                      height: 20,
                      borderRadius: 20,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{fontSize: 10, color: '#fff'}}>Load More</Text>
                  </TouchableOpacity>
                </View>
                <View style={{alignItems: 'center'}}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#ff9ac1', '#f263a1', '#e83a88']}
                    style={{
                      alignItems: 'center',
                      width: width / 3.5,
                      height: 120,
                      padding: 15,
                      margin: 20,
                      borderRadius: 10,
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 3,
                      },
                      shadowOpacity: 0.29,
                      shadowRadius: 4.65,
                      elevation: 7,
                    }}>
                    <Image
                      source={allergies}
                      style={{
                        width: 50,
                        height: 50,
                        resizeMode: 'contain',
                        margin: 5,
                      }}></Image>
                    <Text
                      style={{
                        fontWeight: '600',
                        color: '#ffff',
                        fontSize: 13,
                        margin: '15%',
                      }}>
                      Allergies
                    </Text>
                  </LinearGradient>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('AskQuery', {name: 'AskQuery'})
                    }
                    style={{
                      backgroundColor: '#25aade',
                      width: 70,

                      height: 20,
                      borderRadius: 20,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{fontSize: 10, color: '#fff'}}>Load More</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <View style={{alignItems: 'center'}}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#ff9ac1', '#f263a1', '#e83a88']}
                    style={{
                      alignItems: 'center',
                      width: width / 3.5,
                      height: 120,
                      padding: 15,
                      margin: 20,
                      borderRadius: 10,
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 3,
                      },
                      shadowOpacity: 0.29,
                      shadowRadius: 4.65,
                      elevation: 7,
                    }}>
                    <Image
                      source={menstruation}
                      style={{
                        width: 50,
                        height: 50,
                        resizeMode: 'contain',
                        margin: 5,
                      }}></Image>
                    <Text
                      style={{
                        fontWeight: '600',
                        color: '#ffff',
                        marginVertical: '15%',
                        fontSize: 13,
                      }}>
                      Menstruation
                    </Text>
                  </LinearGradient>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('AskQuery', {name: 'AskQuery'})
                    }
                    style={{
                      backgroundColor: '#25aade',
                      width: 70,

                      height: 20,
                      borderRadius: 20,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{fontSize: 10, color: '#fff'}}>Load More</Text>
                  </TouchableOpacity>
                </View>
                <View style={{alignItems: 'center'}}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#5a90ce', '#5472b8', '#495baa']}
                    style={{
                      alignItems: 'center',
                      width: width / 3.5,
                      height: 120,
                      padding: 15,
                      margin: 20,
                      borderRadius: 10,
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 3,
                      },
                      shadowOpacity: 0.29,
                      shadowRadius: 4.65,
                      elevation: 7,
                    }}>
                    <Image
                      source={sunburn}
                      style={{
                        width: 50,
                        height: 50,
                        resizeMode: 'contain',
                        margin: 5,
                      }}></Image>
                    <Text
                      style={{
                        fontWeight: '600',
                        color: '#ffff',
                        fontSize: 13,
                        margin: '15%',
                      }}>
                      Sunburn
                    </Text>
                  </LinearGradient>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('AskQuery', {name: 'AskQuery'})
                    }
                    style={{
                      backgroundColor: '#25aade',
                      width: 70,

                      height: 20,
                      borderRadius: 20,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{fontSize: 10, color: '#fff'}}>Load More</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Products', {name: 'Products'})
                }
                style={{
                  backgroundColor: 'red',
                  width: 70,
                  height: 24,
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 10,
                }}>
                <Text style={{color: '#fff', fontSize: 10}}>Load More</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: '#ee5d97',
                  width: width / 1.15,
                  height: 30,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginVertical: 10,
                }}>
                <Text style={{color: '#fff', fontWeight: '700'}}>Articles</Text>
              </TouchableOpacity>
              <Card
                style={{
                  width: width / 1.15,
                  height: 290,
                  padding: 20,
                  backgroundColor: '#ffff',
                  marginVertical: 5,
                }}>
                <View style={{paddingVertical: 5}}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '500',
                      color: 'black',
                    }}>
                    Lorem Ipsum is simply
                  </Text>
                  <Text
                    style={{
                      fontSize: 8,
                    }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      padding: 3,
                      alignItems: 'center',
                      borderBottomWidth: 1,
                    }}></View>
                </View>
                <View style={{paddingVertical: 5}}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '500',
                      color: 'black',
                    }}>
                    Lorem Ipsum is simply
                  </Text>
                  <Text
                    style={{
                      fontSize: 8,
                    }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      padding: 3,
                      alignItems: 'center',
                      borderBottomWidth: 1,
                    }}></View>
                </View>
                <View style={{paddingVertical: 5}}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '500',
                      color: 'black',
                    }}>
                    Lorem Ipsum is simply
                  </Text>
                  <Text
                    style={{
                      fontSize: 8,
                    }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      padding: 3,
                      alignItems: 'center',
                      borderBottomWidth: 1,
                    }}></View>
                </View>
                <View style={{paddingVertical: 5}}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '500',
                      color: 'black',
                    }}>
                    Lorem Ipsum is simply
                  </Text>
                  <Text
                    style={{
                      fontSize: 8,
                    }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Text>
                </View>
              </Card>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#ee5d97',
                width: width / 1.15,
                height: 30,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 10,
              }}>
              <Text style={{color: '#fff', fontWeight: '700'}}>
                Submit Your View / Query
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: width,
                height: 260,
                paddingHorizontal: '10%',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{width: '64%'}}>
                  <Text style={{marginVertical: 3, color: 'black'}}>
                    Topic:
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: 'grey',
                      height: 28,
                      padding: 0,
                      width: '100%',
                    }}>
                    <MaterialIcons
                      name="topic"
                      size={16}
                      color="grey"
                      style={{padding: 5}}
                    />
                    <TextInput
                      style={{paddingVertical: 4, width: '84%'}}></TextInput>
                  </View>
                  <Text style={{marginVertical: 3, color: 'black'}}>Name:</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: 'grey',
                      height: 28,
                      padding: 0,
                      width: '100%',
                    }}>
                    <MaterialIcons
                      name="drive-file-rename-outline"
                      size={16}
                      color="grey"
                      style={{padding: 5}}
                    />
                    <TextInput
                      style={{paddingVertical: 4, width: '84%'}}></TextInput>
                  </View>
                  <Text style={{marginVertical: 3, color: 'black'}}>
                    Comment:
                  </Text>
                </View>

                <View style={{width: '30%'}}>
                  <Image
                    source={queryimage}
                    style={{
                      width: 100,
                      height: 100,
                      resizeMode: 'contain',
                    }}></Image>
                </View>
              </View>
              <View
                style={{
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: 'grey',
                  height: 101,
                  padding: 0,
                  width: '100%',
                }}>
                <FontAwesome
                  name="comments-o"
                  size={16}
                  color="grey"
                  style={{padding: 5}}
                />
                <TextInput
                  style={{
                    paddingVertical: 4,
                    width: '100%',
                    height: 48,
                  }}></TextInput>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    height: 25,
                    alignSelf: 'flex-end',
                    backgroundColor: '#e5ebf7',
                  }}>
                  <TouchableOpacity
                    style={{
                      borderWidth: 0.5,
                      flexDirection: 'row',
                      backgroundColor: '#ffff',
                      borderRadius: 8,
                    }}>
                    <Text style={{fontWeight: '600'}}>Attachment</Text>
                    <Entypo
                      name="attachment"
                      size={16}
                      color="grey"
                      style={{padding: 5}}
                    />
                  </TouchableOpacity>
                  <View style={{flexDirection: 'row'}}>
                    <Feather
                      name="mic"
                      size={16}
                      color="grey"
                      style={{padding: 5}}
                    />
                    <Entypo
                      name="images"
                      size={16}
                      color="grey"
                      style={{padding: 5}}
                    />
                    <Feather
                      name="video"
                      size={16}
                      color="grey"
                      style={{padding: 5}}
                    />
                    <View
                      style={{
                        borderWidth: 0.5,
                        flexDirection: 'row',
                        backgroundColor: '#e5ebf7',
                        borderRadius: 8,
                      }}>
                      <MaterialCommunityIcons
                        name="format-text"
                        size={16}
                        color="grey"
                        style={{padding: 5}}
                      />
                      <Feather
                        name="bold"
                        size={16}
                        color="grey"
                        style={{padding: 5}}
                      />
                      <Feather
                        name="italic"
                        size={16}
                        color="grey"
                        style={{padding: 5}}
                      />
                      <Feather
                        name="underline"
                        size={16}
                        color="grey"
                        style={{padding: 5}}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                width: width,
                height: 240,
                backgroundColor: '#485ba7',
                padding: 20,
              }}>
              <Text
                style={{
                  marginLeft: 18,
                  color: '#ffff',
                  fontSize: 14,
                  alignSelf: 'flex-start',
                  fontWeight: '600',
                }}>
                Products
              </Text>
              <Text
                style={{
                  marginLeft: 18,
                  color: '#ffff',
                  fontSize: 8,
                  alignSelf: 'flex-start',
                  fontWeight: '600',
                }}>
                Lorem Ipsum.
              </Text>

              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      alignItems: 'center',
                      width: 280,
                      backgroundColor: '#ffff',
                      height: 120,

                      margin: 10,

                      flexDirection: 'row',
                    }}>
                    <View
                      style={{borderRightWidth: 1, borderBottomColor: 'black'}}>
                      <Image
                        source={hremoval}
                        style={{
                          width: 100,
                          height: 120,
                          resizeMode: 'contain',
                        }}></Image>
                    </View>
                    <View
                      style={{
                        justifyContent: 'space-between',
                        padding: 10,

                        flexDirection: 'column',
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '700',
                          color: 'black',
                        }}>
                        Hair Remover Creme
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{color: 'green', fontWeight: '600'}}>
                          ₹142.00
                        </Text>
                        <Text style={{fontSize: 9, marginTop: 5}}>
                          (₹284.00 / 100 g)
                        </Text>
                      </View>
                      <Text
                        style={{
                          textDecorationLine: 'line-through',
                          fontSize: 12,
                          color: 'red',
                          fontWeight: '500',
                        }}>
                        ₹169.00
                      </Text>
                      <View style={{flexDirection: 'row', marginVertical: 5}}>
                        <View
                          style={{
                            backgroundColor: 'green',
                            height: 22,
                            width: 36,

                            borderRadius: 3,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              color: 'white',
                              fontWeight: '600',
                            }}>
                            4.0
                          </Text>
                        </View>
                        <Text
                          style={{
                            marginHorizontal: 5,
                            fontWeight: '600',
                          }}>
                          Reviews
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      width: 280,
                      backgroundColor: '#ffff',
                      height: 120,

                      margin: 10,

                      flexDirection: 'row',
                    }}>
                    <View
                      style={{borderRightWidth: 1, borderBottomColor: 'black'}}>
                      <Image
                        source={hremoval}
                        style={{
                          width: 100,
                          height: 120,
                          resizeMode: 'contain',
                        }}></Image>
                    </View>
                    <View
                      style={{
                        justifyContent: 'space-between',
                        padding: 10,

                        flexDirection: 'column',
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '700',
                          color: 'black',
                        }}>
                        Hair Remover Creme
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{color: 'green', fontWeight: '600'}}>
                          ₹142.00
                        </Text>
                        <Text style={{fontSize: 9, marginTop: 5}}>
                          (₹284.00 / 100 g)
                        </Text>
                      </View>
                      <Text
                        style={{
                          textDecorationLine: 'line-through',
                          fontSize: 12,
                          color: 'red',
                          fontWeight: '500',
                        }}>
                        ₹169.00
                      </Text>
                      <View style={{flexDirection: 'row', marginVertical: 5}}>
                        <View
                          style={{
                            backgroundColor: 'green',
                            height: 22,
                            width: 36,

                            borderRadius: 3,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              color: 'white',
                              fontWeight: '600',
                            }}>
                            4.0
                          </Text>
                        </View>
                        <Text
                          style={{
                            marginHorizontal: 5,
                            fontWeight: '600',
                          }}>
                          Reviews
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      width: 280,
                      backgroundColor: '#ffff',
                      height: 120,

                      margin: 10,

                      flexDirection: 'row',
                    }}>
                    <View
                      style={{borderRightWidth: 1, borderBottomColor: 'black'}}>
                      <Image
                        source={hremoval}
                        style={{
                          width: 100,
                          height: 120,
                          resizeMode: 'contain',
                        }}></Image>
                    </View>
                    <View
                      style={{
                        justifyContent: 'space-between',
                        padding: 10,

                        flexDirection: 'column',
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '700',
                          color: 'black',
                        }}>
                        Hair Remover Creme
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{color: 'green', fontWeight: '600'}}>
                          ₹142.00
                        </Text>
                        <Text style={{fontSize: 9, marginTop: 5}}>
                          (₹284.00 / 100 g)
                        </Text>
                      </View>
                      <Text
                        style={{
                          textDecorationLine: 'line-through',
                          fontSize: 12,
                          color: 'red',
                          fontWeight: '500',
                        }}>
                        ₹169.00
                      </Text>
                      <View style={{flexDirection: 'row', marginVertical: 5}}>
                        <View
                          style={{
                            backgroundColor: 'green',
                            height: 22,
                            width: 36,

                            borderRadius: 3,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Text
                            style={{
                              color: 'white',
                              fontWeight: '600',
                            }}>
                            4.0
                          </Text>
                        </View>
                        <Text
                          style={{
                            marginHorizontal: 5,
                            fontWeight: '600',
                          }}>
                          Reviews
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
            <View
              style={{
                width: width,
                height: 170,
                backgroundColor: '#e9eef7',
                padding: 20,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: width / 2,
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}>
                <TouchableOpacity>
                  <Entypo
                    name="linkedin-with-circle"
                    size={36}
                    color="#0e76a8"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Entypo
                    name="facebook-with-circle"
                    size={36}
                    color="#1877F2"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={instagram}
                    style={{width: 40, height: 40}}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Entypo
                    name="twitter-with-circle"
                    size={36}
                    color="#00abee"
                  />
                </TouchableOpacity>
              </View>
              <Text
                style={{fontSize: 10, textAlign: 'center', marginVertical: 20}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default WomenWellness;

const styles = StyleSheet.create({
  screen: {
    width: width,
    height: height,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffff',
  },

  header: {
    width: '90%',
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 15,
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

  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
