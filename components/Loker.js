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
  RefreshControl,
  Linking,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import moment from 'moment';
export default function Loker({navigation, route}) {
  const [fullName, setFullName] = useState('');
  const [vacancies, setVacancies] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
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

    const getVacancies = async () => {
      return fetch(
        'https://dev.skillana.id/api/internal/recruitment/vacancies/list',
      )
        .then(response => response.json())
        .then(responseData => {
          setVacancies(responseData.data);
        })
        .catch(error => {
          console.error(error);
        });
    };
    getVacancies();
  }, []);

  const refreshVacancies = async () => {
    console.log('Refreshing');
    fetch('https://dev.skillana.id/api/internal/recruitment/vacancies/list')
      .then(response => response.json())
      .then(responseData => {
        setVacancies(responseData.data);
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F6F9FB'}}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'white'}></StatusBar>
      <View
        style={{
          paddingHorizontal: wp('5%'),
          paddingVertical: wp('2%'),
          backgroundColor: 'white',
        }}>
        <View style={{}}>
          <Text
            allowFontScaling={false}
            style={{
              fontFamily: 'pBold',
              fontSize: wp('6%'),
              textAlign: 'center',
            }}>
            Lowongan Pekerjaan
          </Text>
        </View>
      </View>
      <View style={{marginTop: wp('0%'), paddingHorizontal: wp('5%')}}>
        <FlatList
          data={vacancies}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                refreshVacancies();
              }}
            />
          }
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{height: wp('3%')}} />}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('DLoker', {
                  logo: item.company.logo,
                  name: item.name,
                  company: item.company.name,
                  type: item.type,
                  province: item.province.name,
                  posting: item.createdAt,
                });
              }}
              style={{
                backgroundColor: 'white',
                borderRadius: wp('2%'),
                paddingVertical: wp('4%'),
                paddingHorizontal: wp('4%'),
                overflow: 'hidden',
                borderColor: 'lightgrey',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderWidth: wp('0.1%'),
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.18,
                shadowRadius: 1.0,

                elevation: 1,
              }}>
              <View style={{width: '25%'}}>
                <Image
                  resizeMode={'contain'}
                  source={{uri: item.company.logo}}
                  style={{
                    width: '100%',
                    height: wp('20%'),
                  }}></Image>
              </View>
              <View
                style={{
                  maxWidth: '75%',
                  minWidth: '75%',
                  paddingHorizontal: wp('4%'),
                }}>
                <Text
                  allowFontScaling={false}
                  style={{
                    fontFamily: 'pBold',
                    fontSize: wp('6%'),
                    textAlign: 'left',
                    color: '#15548F',
                    marginTop: wp('-2%'),
                  }}>
                  {item.name}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: wp('-1%'),
                  }}>
                  <Text
                    allowFontScaling={false}
                    style={{
                      fontFamily: 'pReg',
                      fontSize: wp('3%'),
                      textAlign: 'left',
                      color: 'black',
                    }}>
                    {item.company.name}{' '}
                  </Text>
                  <Text
                    allowFontScaling={false}
                    style={{
                      fontFamily: 'pReg',
                      fontSize: wp('3%'),
                      textAlign: 'left',
                      color: 'grey',
                    }}>
                    - {item.type}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: wp('0.5%'),
                    marginBottom: wp('0.5%'),
                  }}>
                  <EvilIcons name="location" color={'grey'} size={20} />
                  <Text
                    allowFontScaling={false}
                    style={{
                      fontFamily: 'pReg',
                      fontSize: wp('3%'),
                      textAlign: 'left',
                      color: 'grey',
                      marginLeft: wp('2%'),
                    }}>
                    {item.province.name}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: wp('1%'),
                  }}>
                  <Text
                    allowFontScaling={false}
                    style={{
                      fontFamily: 'pSBold',
                      fontSize: wp('3%'),
                      textAlign: 'left',
                      color: '#15548F',
                    }}>
                    Rp{' '}
                    {item.minSalary
                      .toFixed(2)
                      .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                  </Text>
                  <Text
                    allowFontScaling={false}
                    style={{
                      fontFamily: 'pSBold',
                      fontSize: wp('3%'),
                      textAlign: 'left',
                      color: '#15548F',
                      marginLeft: wp('1%'),
                      marginRight: wp('1%'),
                    }}>
                    {' '}
                    -{' '}
                  </Text>
                  <Text
                    allowFontScaling={false}
                    style={{
                      fontFamily: 'pSBold',
                      fontSize: wp('3%'),
                      textAlign: 'left',
                      color: '#15548F',
                    }}>
                    Rp{' '}
                    {item.maxSalary
                      .toFixed(2)
                      .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                  </Text>
                </View>
                <Text
                  allowFontScaling={false}
                  style={{
                    fontWeight: 'bold',
                    fontSize: wp('3%'),
                    textAlign: 'left',
                    color: 'grey',
                  }}>
                  Diunggah{' '}
                  {moment
                    .utc(item.createdAt)
                    .local()
                    .startOf('seconds')
                    .fromNow()}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          ListHeaderComponent={() => (
            <View
              style={{
                height: wp('6%'),
              }}></View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
