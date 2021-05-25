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
export default function Home({navigation, route}) {
  const [fullName, setFullName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [IGC, setIGC] = useState([]);
  useEffect(() => {
    const getAsync = async () => {
      const fullName = await AsyncStorage.getItem('fullName');
      if (fullName !== null) {
        setFullName(fullName);
      }
      const nickName = await AsyncStorage.getItem('nickName');
      if (nickName !== null) {
        // value previously stored
      }
      const phone = await AsyncStorage.getItem('phone');
      if (phone !== null) {
        // value previously stored
      }
      const email = await AsyncStorage.getItem('email');
      if (email !== null) {
        // value previously stored
      }
      const avatar = await AsyncStorage.getItem('avatar');
      if (avatar !== null) {
        setAvatar(avatar);
      }
      const session_id = await AsyncStorage.getItem('session_id');
      if (session_id !== null) {
        // value previously stored
      }
      const expectedSalary = await AsyncStorage.getItem('expectedSalary');
      if (expectedSalary !== null) {
        // value previously stored
      }
      const description = await AsyncStorage.getItem('description');
      if (description !== null) {
        // value previously stored
      }
    };
    getAsync();

    const getIGC = async () => {
      return fetch('https://skillana.id/instagram.php')
        .then(response => response.json())
        .then(responseData => {
          setIGC(responseData);
        })
        .catch(error => {
          console.error(error);
        });
    };
    getIGC();
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F6F9FB'}}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'#F6F9FB'}></StatusBar>
      <ScrollView>
        <View
          style={{
            paddingHorizontal: wp('5%'),
            paddingVertical: wp('8%'),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{maxWidth: '80%'}}>
            <Text
              allowFontScaling={false}
              style={{
                fontFamily: "pBold",
                fontSize: wp('7%'),
                textAlign: 'left',
              }}>
              Hai {fullName},
            </Text>
            <Text
              allowFontScaling={false}
              style={{
                fontSize: wp('4%'),
                textAlign: 'left',
                fontFamily: "pReg",
                marginTop: wp("-2%")
              }}>
              Yuk temukan potensimu!
            </Text>
          </View>
          <View style={{}}>
            <Image
              //   source={{uri: avatar}} NO FOUND FILES
              source={require('../assets/gambar/avatar.png')}
              style={{
                width: wp('20%'),
                height: wp('20%'),
                borderRadius: wp('5%'),
                backgroundColor: '#F8F8FA',
              }}></Image>
          </View>
        </View>
        <View style={{marginTop: wp('2%')}}>
          <View style={{paddingHorizontal: wp('5%')}}>
            <Text
              allowFontScaling={false}
              style={{
                fontFamily: "pSBold",
                fontSize: wp('5%'),
                textAlign: 'left',
                marginBottom: wp('1%'),
              }}>
              Konten Buat Kamu
            </Text>
          </View>
          <FlatList
            data={IGC}
            showsHorizontalScrollIndicator={false}
            horizontal
            ItemSeparatorComponent={() => <View style={{width: wp('6%')}} />}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(item.url);
                }}
                style={{
                  width: wp('80%'),
                  backgroundColor: 'white',
                  borderRadius: wp('2%'),
                  overflow: 'hidden',
                  borderColor:"lightgrey",
                  borderWidth: wp("0.1%"),
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.18,
                  shadowRadius: 1.0,

                  elevation: 1,
                }}>
                <View
                  style={{
                    borderLeftWidth: wp('2%'),
                    borderLeftColor: '#15548F',
                  }}>
                  <Image
                    source={{uri: item.images[0]}}
                    style={{
                      width: '100%',
                      height: wp('40%'),
                      backgroundColor: 'lightgrey',
                    }}></Image>
                </View>
                <View
                  style={{
                    paddingHorizontal: wp('6%'),
                    paddingVertical: wp('3%'),
                  }}>
                  <Text
                    allowFontScaling={false}
                    style={{
                      fontFamily: "pReg",
                      fontSize: wp('4%'),
                      textAlign: 'left',
                    }}>
                    {item.caption.substring(0, 100) + '...'}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            ListFooterComponent={() => (
              <View
                style={{
                  width: wp('5%'),
                }}></View>
            )}
            ListHeaderComponent={() => (
              <View
                style={{
                  width: wp('5%'),
                }}></View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
