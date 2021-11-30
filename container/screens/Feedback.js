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
import img2 from '../assets/img21.png';
import faq from '../assets/faq.png';

import anxiety from '../assets/img11.png';
import allergies from '../assets/img12.png';
import sunburn from '../assets/img13.png';
import menstruation from '../assets/img14.png';
import kalpana from '../assets/img16.png';
import sumit from '../assets/img17.png';
import yashvant from '../assets/img18.png';
import jasmine from '../assets/img19.png';
import social from '../assets/img015.png';
import hremoval from '../assets/img20.png';
import instagram from '../assets/instagram.png';
import sexualhealth from '../assets/sexualhealth.jpg';

import Evillcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {Card} from 'react-native-shadow-cards';

const images = [{LoginImage}, {LoginImage}, {LoginImage}];

const Feedback = () => {
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
            <View style={{alignItems: 'center', paddingHorizontal: 7}}>
              <View style={{width: 348, height: 160, margin: 10}}>
                <ImageBackground
                  source={img2}
                  style={{
                    width: '100%',
                    height: 150,
                    resizeMode: 'cover',
                    justifyContent: 'center',
                  }}>
                  <View style={{width: '40%', alignItems: 'center'}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 8,
                        marginLeft: '12%',
                        padding: 2,
                      }}>
                      Ask Query to Qualified Experts
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 12,
                        marginLeft: '10%',
                        padding: 4,
                        fontWeight: '900',
                      }}>
                      To Get Your Solution
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 8,
                        marginLeft: '12%',
                        padding: 2,
                      }}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Text>
                    <TouchableOpacity
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: 'black',
                        borderRadius: 8,
                        width: '70%',
                        height: 30,
                      }}>
                      <Text style={{fontSize: 8, fontWeight: '700'}}>
                        Ask Your Questions
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
              <Card
                style={{
                  width: width / 1.15,
                  height: 120,
                  backgroundColor: '#ffff',
                  marginVertical: 5,
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#4d50fa',
                    width: width / 1.15,
                    height: 30,
                    borderRadius: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: '#fff', fontWeight: '700'}}>
                    Sexual and Reproductive Health Problems
                  </Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                  <View style={{width: '60%', alignItems: 'center'}}>
                    <Text
                      style={{
                        fontSize: 8,
                        padding: 14,
                      }}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      width: '40%',
                      justifyContent: 'center',
                      padding: 5,
                    }}>
                    <Image
                      source={sexualhealth}
                      style={{
                        width: '100%',
                        height: 80,
                        resizeMode: 'contain',
                      }}></Image>
                  </View>
                </View>
              </Card>

              <Card
                style={{
                  width: width / 1.15,
                  height: 140,
                  backgroundColor: '#ffff',
                  marginVertical: 5,
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#4d50fa',
                    width: width / 1.15,
                    height: 30,
                    borderRadius: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: '#fff', fontWeight: '700'}}>
                    What Experts Says
                  </Text>
                </TouchableOpacity>
                <View style={{paddingHorizontal: 10}}>
                  {/* <Text
                    style={{
                      fontSize: 8,
                      padding: 14,
                    }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Text> */}
                  <View
                    style={{
                      flexDirection: 'row',
                      padding: 3,
                      alignItems: 'center',
                      borderBottomWidth: 1,
                    }}>
                    <View style={{width: '16%', alignItems: 'center'}}>
                      <FontAwesome name="user" size={24} color="#4d50fa" />
                    </View>
                    <View
                      style={{
                        flexDirection: 'column',
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <Text
                          style={{
                            fontSize: 13,
                            fontWeight: '500',
                            color: 'black',
                          }}>
                          Expert Comment 1
                        </Text>
                        <Text
                          style={{
                            marginHorizontal: 20,
                            fontWeight: '600',
                            fontSize: 9,
                            marginTop: 3,
                            alignSelf: 'flex-start',
                          }}>
                          :3 hours ago
                        </Text>
                      </View>

                      <Text style={{fontSize: 9, marginTop: 0}}>
                        How did you get start
                      </Text>

                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 10,
                          }}>
                          Reply
                        </Text>

                        <Text
                          style={{
                            marginHorizontal: 8,
                            fontWeight: '600',
                            fontSize: 9,
                          }}>
                          8 replies
                        </Text>
                        <AntDesign
                          name="up"
                          size={10}
                          color="black"></AntDesign>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginHorizontal: 5,
                          }}>
                          <Text style={{fontSize: 10}}>10</Text>
                          <AntDesign
                            name="like1"
                            size={10}
                            color="black"
                            style={{marginHorizontal: 5}}></AntDesign>
                          <AntDesign
                            name="dislike1"
                            size={10}
                            color="black"
                            style={{marginHorizontal: 5}}></AntDesign>
                          <Text style={{fontSize: 10}}>2</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      padding: 3,
                      alignItems: 'center',
                    }}>
                    <View style={{width: '16%', alignItems: 'center'}}>
                      <FontAwesome name="user" size={24} color="#4d50fa" />
                    </View>
                    <View
                      style={{
                        flexDirection: 'column',
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <Text
                          style={{
                            fontSize: 13,
                            fontWeight: '500',
                            color: 'black',
                          }}>
                          Expert Comment 2
                        </Text>
                        <Text
                          style={{
                            marginHorizontal: 20,
                            fontWeight: '600',
                            fontSize: 9,
                            marginTop: 3,
                            alignSelf: 'flex-start',
                          }}>
                          :3 hours ago
                        </Text>
                      </View>

                      <Text style={{fontSize: 9, marginTop: 0}}>
                        How did you get start
                      </Text>

                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 10,
                          }}>
                          Reply
                        </Text>

                        <Text
                          style={{
                            marginHorizontal: 8,
                            fontWeight: '600',
                            fontSize: 9,
                          }}>
                          8 replies
                        </Text>
                        <AntDesign
                          name="up"
                          size={10}
                          color="black"></AntDesign>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginHorizontal: 5,
                          }}>
                          <Text style={{fontSize: 10}}>10</Text>
                          <AntDesign
                            name="like1"
                            size={10}
                            color="black"
                            style={{marginHorizontal: 5}}></AntDesign>
                          <AntDesign
                            name="dislike1"
                            size={10}
                            color="black"
                            style={{marginHorizontal: 5}}></AntDesign>
                          <Text style={{fontSize: 10}}>2</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </Card>
            </View>
            <View style={{width: 348, height: 160, margin: 10}}>
              <ImageBackground
                source={faq}
                style={{
                  width: '100%',
                  height: 150,
                  resizeMode: 'cover',
                  justifyContent: 'center',
                }}>
                <View style={{width: '40%', alignItems: 'center'}}>
                  <Text
                    style={{
                      color: '#ffff',
                      fontSize: 11,

                      padding: 4,
                      fontWeight: '900',
                    }}>
                    Your View / Query
                  </Text>
                  <Text
                    style={{
                      color: '#ffff',
                      fontSize: 8,
                      marginLeft: '12%',
                      padding: 2,
                    }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Text>
                  <TouchableOpacity
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#ffff',
                      borderRadius: 3,
                      marginVertical: 7,
                      width: '70%',
                      height: 20,
                    }}>
                    <Text
                      style={{fontSize: 8, fontWeight: '500', color: '#ffff'}}>
                      SUBMIT YOUR QUERY
                    </Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>

            <Card
              style={{
                width: width / 1.15,
                height: 140,
                backgroundColor: '#ffff',
                marginVertical: 5,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#4d50fa',
                  width: width / 1.15,
                  height: 30,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#fff', fontWeight: '700'}}>
                  Responses
                </Text>
              </TouchableOpacity>
              <View style={{paddingHorizontal: 10}}>
                {/* <Text
                    style={{
                      fontSize: 8,
                      padding: 14,
                    }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Text> */}
                <View
                  style={{
                    flexDirection: 'row',
                    padding: 3,
                    alignItems: 'center',
                    borderBottomWidth: 1,
                  }}>
                  <View style={{width: '16%', alignItems: 'center'}}>
                    <FontAwesome name="user" size={24} color="#4d50fa" />
                  </View>
                  <View
                    style={{
                      flexDirection: 'column',
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: '500',
                          color: 'black',
                        }}>
                        Comment & Query 1
                      </Text>
                      <Text
                        style={{
                          marginHorizontal: 20,
                          fontWeight: '600',
                          fontSize: 9,
                          marginTop: 3,
                          alignSelf: 'flex-start',
                        }}>
                        :3 hours ago
                      </Text>
                    </View>

                    <Text style={{fontSize: 9, marginTop: 0}}>
                      Here and there
                    </Text>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 10,
                        }}>
                        Reply
                      </Text>

                      <Text
                        style={{
                          marginHorizontal: 8,
                          fontWeight: '600',
                          fontSize: 9,
                        }}>
                        8 replies
                      </Text>
                      <AntDesign name="up" size={10} color="black"></AntDesign>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginHorizontal: 5,
                        }}>
                        <Text style={{fontSize: 10}}>10</Text>
                        <AntDesign
                          name="like1"
                          size={10}
                          color="black"
                          style={{marginHorizontal: 5}}></AntDesign>
                        <AntDesign
                          name="dislike1"
                          size={10}
                          color="black"
                          style={{marginHorizontal: 5}}></AntDesign>
                        <Text style={{fontSize: 10}}>2</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    padding: 3,
                    alignItems: 'center',
                  }}>
                  <View style={{width: '16%', alignItems: 'center'}}>
                    <FontAwesome name="user" size={24} color="#4d50fa" />
                  </View>
                  <View
                    style={{
                      flexDirection: 'column',
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: '500',
                          color: 'black',
                        }}>
                        Comment & Query 1
                      </Text>
                      <Text
                        style={{
                          marginHorizontal: 20,
                          fontWeight: '600',
                          fontSize: 9,
                          marginTop: 3,
                          alignSelf: 'flex-start',
                        }}>
                        :3 hours ago
                      </Text>
                    </View>

                    <Text style={{fontSize: 9, marginTop: 0}}>
                      How did you get start
                    </Text>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 10,
                        }}>
                        Reply
                      </Text>

                      <Text
                        style={{
                          marginHorizontal: 8,
                          fontWeight: '600',
                          fontSize: 9,
                        }}>
                        8 replies
                      </Text>
                      <AntDesign name="up" size={10} color="black"></AntDesign>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginHorizontal: 5,
                        }}>
                        <Text style={{fontSize: 10}}>10</Text>
                        <AntDesign
                          name="like1"
                          size={10}
                          color="black"
                          style={{marginHorizontal: 5}}></AntDesign>
                        <AntDesign
                          name="dislike1"
                          size={10}
                          color="black"
                          style={{marginHorizontal: 5}}></AntDesign>
                        <Text style={{fontSize: 10}}>2</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </Card>

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
                          fontWeight: '500',
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
                          fontWeight: '500',
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
                          fontWeight: '500',
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

export default Feedback;

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
});
