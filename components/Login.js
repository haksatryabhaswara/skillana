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
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
export default function Login({navigation, route}) {
  const [email, setEmail] = useState('oca@yopmail.com');
  const [password, setPassword] = useState('1234567a');
  const [openPass, setOP] = useState(true);
  const [proses, setProses] = useState(false);

  //  START Check Login
  const checkLogin = async () => {
    setProses(true);
    fetch('https://dev.skillana.id/api/auth/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(responseData => {
        console.log(
          'POST Response',
          'Response Body -> ' + JSON.stringify(responseData),
        );
        if (responseData.errors != null) {
          alert(
            'Mohon maaf, email atau password yang anda masukan salah, silahkan masukan email atau password yang lain.',
          );
          setProses(false);
        } else {
          console.log(responseData.fullName);
          AsyncStorage.setItem('fullName', responseData.fullName);
          AsyncStorage.setItem('nickName', responseData.nickName);
          AsyncStorage.setItem('phone', responseData.phone);
          AsyncStorage.setItem('email', responseData.email);
          AsyncStorage.setItem('avatar', responseData.avatar);
          AsyncStorage.setItem('session_id', responseData.session_id);
          AsyncStorage.setItem('expectedSalary', responseData.expectedSalary);
          AsyncStorage.setItem('description', responseData.description);
          navigation.navigate('BottomTab');
          setProses(false);
        }
      });
  };
  //   END Check Login

  // Check credential
  useFocusEffect(
    React.useCallback(() => {
      const checkName = async () => {
        console.log('CHECKING CREDENTIAL');
        const fullNameX = await AsyncStorage.getItem('fullName');
        console.log('NAMA :' + fullNameX);
        if (fullNameX !== null) {
          navigation.navigate('BottomTab');
        } else {
        }
      };
      checkName();
    }, []),
  );
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <StatusBar
        backgroundColor={'white'}
        barStyle={'dark-content'}></StatusBar>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
        }}>
        <View
          style={{
            paddingHorizontal: wp('5%'),
          }}>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              resizeMode={'contain'}
              source={require('../assets/gambar/logoLogin.png')}
              style={{width: wp('40%'), height: wp('40%')}}></Image>
          </View>

          <View style={{width: '100%', marginTop: wp('10%')}}>
            <Text
              allowFontScaling={false}
              style={{
                fontFamily: 'pBold',
                fontSize: wp('8%'),
                textAlign: 'left',
              }}>
              Login
            </Text>
          </View>
          <View style={{width: '100%', marginTop: wp('10%')}}>
            <Text
              allowFontScaling={false}
              style={{
                fontFamily: 'pReg',
                fontSize: wp('4%'),
                textAlign: 'left',
              }}>
              Email
            </Text>
            <TextInput
              allowFontScaling={false}
              style={{
                borderRadius: wp('2%'),
                backgroundColor: '#F8F8FA',
                marginTop: wp('2%'),
                paddingHorizontal: wp('5%'),
                fontSize: wp('4%'),
              }}
              onChangeText={e => {
                setEmail(e);
              }}
              value={email}
              placeholder="Type your email.."
              keyboardType={'email-address'}
            />
          </View>
          <View style={{width: '100%', marginTop: wp('4%')}}>
            <Text
              allowFontScaling={false}
              style={{
                fontFamily: 'pReg',
                fontSize: wp('4%'),
                textAlign: 'left',
              }}>
              Password
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: wp('2%'),
                backgroundColor: '#F8F8FA',
                marginTop: wp('2%'),
                paddingHorizontal: wp('5%'),
              }}>
              <TextInput
                allowFontScaling={false}
                style={{
                  fontSize: wp('4%'),
                  flex: 1,
                }}
                onChangeText={e => {
                  setPassword(e);
                }}
                value={password}
                placeholder="Type your password.."
                keyboardType={'default'}
                secureTextEntry={openPass}
              />

              <TouchableOpacity
                onPress={() => {
                  setOP(!openPass);
                }}
                style={{
                  width: '5%',
                  padding: wp('4%'),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  resizeMode={'contain'}
                  source={require('../assets/gambar/eyes.png')}
                  style={{width: wp('4%'), height: wp('4%')}}></Image>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                if (proses == true) {
                } else {
                  checkLogin();
                }
              }}
              style={{
                marginTop: wp('6%'),
                paddingVertical: wp('4%'),
                backgroundColor: proses == false ? '#5AADF7' : 'lightgrey',
                borderRadius: wp('2%'),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {proses == true ? (
                <ActivityIndicator
                  allowFontScaling={false}
                  size="small"
                  color="white"
                />
              ) : (
                <Text
                  allowFontScaling={false}
                  style={{
                    fontFamily: 'pBold',
                    fontSize: wp('5%'),
                    textAlign: 'left',
                    color: 'white',
                  }}>
                  Masuk
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
