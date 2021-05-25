// Created by Haksatrya Bhaswara
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  FlatList,
  Linking,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
export default function Loker({navigation, route}) {
  const {logo, name, company, type, province, posting} = route.params;
  useEffect(() => {}, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F6F9FB'}}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'white'}></StatusBar>
      <View
        style={{
          paddingHorizontal: wp('5%'),
          paddingVertical: wp('3%'),
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{width: wp('5%')}}>
          <AntDesign name="arrowleft" color={'black'} size={20} />
        </TouchableOpacity>
        <View style={{}}>
          {name.length > 10 ? (
            <Text
              allowFontScaling={false}
              style={{
                fontFamily: "pBold",
                fontSize: wp('5%'),
                textAlign: 'center',
              }}>
              {name.substring(0, 10) + '...'}
            </Text>
          ) : (
            <Text
              allowFontScaling={false}
              style={{
                fontFamily: "pBold",
                fontSize: wp('5%'),
                textAlign: 'center',
              }}>
              {name}
            </Text>
          )}
        </View>
        <View style={{width: wp('5%')}}></View>
      </View>
      <ScrollView>
        <View style={{paddingVertical: wp('6%'), paddingHorizontal: wp('5%')}}>
          <View
            style={{
              width: '100%',
              paddingHorizontal: wp('4%'),
              paddingVertical: wp('10%'),
              backgroundColor: 'white',
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={{uri: logo}}
                style={{width: wp('40%'), height: wp('40%')}}></Image>
              <View style={{}}>
                <Text
                  allowFontScaling={false}
                  style={{
                    fontFamily: "pBold",
                    fontSize: wp('6%'),
                    textAlign: 'center',
                    color: '#15548F',
                    marginTop: wp('4%'),
                  }}>
                  {company}
                </Text>
              </View>
              <View
                style={{
                  marginTop: wp('10%'),
                  width: '100%',
                  paddingHorizontal: wp('4%'),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}>
                <View
                  style={{
                    minWidth: '40%',
                    maxWidth: '40%',
                  }}>
                  <Text
                    allowFontScaling={false}
                    style={{
                      fontFamily: "pReg",
                      fontSize: wp('4%'),
                      textAlign: 'left',
                      color: 'black',
                      marginTop: wp('4%'),
                    }}>
                    Posisi
                  </Text>
                </View>
                <View
                  style={{
                    minWidth: '10%',
                    maxWidth: '10%',
                  }}>
                  <Text
                    allowFontScaling={false}
                    style={{
                      fontFamily: "pReg",
                      fontSize: wp('4%'),
                      textAlign: 'center',
                      color: 'black',
                      marginTop: wp('4%'),
                    }}>
                    :
                  </Text>
                </View>
                <View style={{minWidth: '50%', maxWidth: '50%'}}>
                  <Text
                    allowFontScaling={false}
                    style={{
                      fontFamily: "pReg",
                      fontSize: wp('4%'),
                      textAlign: 'left',
                      color: 'black',
                      marginTop: wp('4%'),
                    }}>
                    {name}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  marginTop: wp('0%'),
                  width: '100%',
                  paddingHorizontal: wp('4%'),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}>
                <View
                  style={{
                    minWidth: '40%',
                    maxWidth: '40%',
                  }}>
                  <Text
                    allowFontScaling={false}
                    style={{
                      fontFamily: "pReg",
                      fontSize: wp('4%'),
                      textAlign: 'left',
                      color: 'black',
                      marginTop: wp('4%'),
                    }}>
                    Perusahaan
                  </Text>
                </View>
                <View
                  style={{
                    minWidth: '10%',
                    maxWidth: '10%',
                  }}>
                  <Text
                    allowFontScaling={false}
                    style={{
                      fontFamily: "pReg",
                      fontSize: wp('4%'),
                      textAlign: 'center',
                      color: 'black',
                      marginTop: wp('4%'),
                    }}>
                    :
                  </Text>
                </View>
                <View style={{minWidth: '50%', maxWidth: '50%'}}>
                  <Text
                    allowFontScaling={false}
                    style={{
                      fontFamily: "pReg",
                      fontSize: wp('4%'),
                      textAlign: 'left',
                      color: 'black',
                      marginTop: wp('4%'),
                    }}>
                    {company}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  marginTop: wp('0%'),
                  width: '100%',
                  paddingHorizontal: wp('4%'),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}>
                <View
                  style={{
                    minWidth: '40%',
                    maxWidth: '40%',
                  }}>
                  <Text
                    allowFontScaling={false}
                    style={{
                      fontFamily: "pReg",
                      fontSize: wp('4%'),
                      textAlign: 'left',
                      color: 'black',
                      marginTop: wp('4%'),
                    }}>
                    Lokasi
                  </Text>
                </View>
                <View
                  style={{
                    minWidth: '10%',
                    maxWidth: '10%',
                  }}>
                  <Text
                    allowFontScaling={false}
                    style={{
                      fontFamily: "pReg",
                      fontSize: wp('4%'),
                      textAlign: 'center',
                      color: 'black',
                      marginTop: wp('4%'),
                    }}>
                    :
                  </Text>
                </View>
                <View style={{minWidth: '50%', maxWidth: '50%'}}>
                  <Text
                    allowFontScaling={false}
                    style={{
                      fontFamily: "pReg",
                      fontSize: wp('4%'),
                      textAlign: 'left',
                      color: 'black',
                      marginTop: wp('4%'),
                    }}>
                    {province}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  marginTop: wp('0%'),
                  width: '100%',
                  paddingHorizontal: wp('4%'),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}>
                <View
                  style={{
                    minWidth: '40%',
                    maxWidth: '40%',
                  }}>
                  <Text
                    allowFontScaling={false}
                    style={{
                      fontFamily: "pReg",
                      fontSize: wp('4%'),
                      textAlign: 'left',
                      color: 'black',
                      marginTop: wp('4%'),
                    }}>
                    Status
                  </Text>
                </View>
                <View
                  style={{
                    minWidth: '10%',
                    maxWidth: '10%',
                  }}>
                  <Text
                    allowFontScaling={false}
                    style={{
                      fontFamily: "pReg",
                      fontSize: wp('4%'),
                      textAlign: 'center',
                      color: 'black',
                      marginTop: wp('4%'),
                    }}>
                    :
                  </Text>
                </View>
                <View style={{minWidth: '50%', maxWidth: '50%'}}>
                  <Text
                    allowFontScaling={false}
                    style={{
                      fontFamily: "pReg",
                      fontSize: wp('4%'),
                      textAlign: 'left',
                      color: 'black',
                      marginTop: wp('4%'),
                    }}>
                    {type}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  marginTop: wp('0%'),
                  width: '100%',
                  paddingHorizontal: wp('4%'),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}>
                <View
                  style={{
                    minWidth: '40%',
                    maxWidth: '40%',
                  }}>
                  <Text
                    allowFontScaling={false}
                    style={{
                      fontFamily: "pReg",
                      fontSize: wp('4%'),
                      textAlign: 'left',
                      color: 'black',
                      marginTop: wp('4%'),
                    }}>
                    Tanggal Penayangan
                  </Text>
                </View>
                <View
                  style={{
                    minWidth: '10%',
                    maxWidth: '10%',
                  }}>
                  <Text
                    allowFontScaling={false}
                    style={{
                      fontFamily: "pReg",
                      fontSize: wp('4%'),
                      textAlign: 'center',
                      color: 'black',
                      marginTop: wp('4%'),
                    }}>
                    :
                  </Text>
                </View>
                <View style={{minWidth: '50%', maxWidth: '50%'}}>
                  <Text
                    allowFontScaling={false}
                    style={{
                      fontFamily: "pReg",
                      fontSize: wp('4%'),
                      textAlign: 'left',
                      color: 'black',
                      marginTop: wp('4%'),
                    }}>
                    {moment(posting).format('DD MMMM YYYY')}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
