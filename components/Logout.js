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
  Modal,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Logout({navigation}) {
  const [visible, setVisible] = useState('');
  const [proses, setProses] = useState(false);
  const [email, setEmail] = useState('oca@yopmail.com');
  const [password, setPassword] = useState('1234567a');
  const logOut = async () => {
    setProses(true);

    // SEHARUSNYA seperti dibawah ini, karna ada kebutuhan untuk melakukan POST ke auth/logout, hanya saja saya kurang tahu variable apa yang dibutuhkan untuk POSTnya, karna setiap saya coba, respon server selalu "Unauthenticated".

    // fetch('https://dev.skillana.id/api/auth/logout', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email: email,
    //     password: password,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(responseData => {
    //     console.log(
    //       'POST Response',
    //       'Response Body -> ' + JSON.stringify(responseData),
    //     );
    //     if (responseData.errors != null) {
    //       alert(
    //         'Mohon maaf, silahkan untuk mencoba logout lain waktu.',
    //       );
    //       setProses(false);
    //     } else {
    //       console.log(responseData.fullName);
    //       AsyncStorage.removeItem('fullName');
    //       AsyncStorage.removeItem('nickName');
    //       AsyncStorage.removeItem('phone');
    //       AsyncStorage.removeItem('email');
    //       AsyncStorage.removeItem('avatar');
    //       AsyncStorage.removeItem('session_id');
    //       AsyncStorage.removeItem('expectedSalary');
    //       AsyncStorage.removeItem('description');
    //       navigation.navigate('Login');
    //       setProses(false);
    //     }
    //   });

    AsyncStorage.removeItem('fullName');
    AsyncStorage.removeItem('nickName');
    AsyncStorage.removeItem('phone');
    AsyncStorage.removeItem('email');
    AsyncStorage.removeItem('avatar');
    AsyncStorage.removeItem('session_id');
    AsyncStorage.removeItem('expectedSalary');
    AsyncStorage.removeItem('description');
    navigation.navigate('Login');
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgba(102, 102, 102, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: wp('8%'),
      }}>
      <View
        style={{
          paddingHorizontal: wp('8%'),
          paddingVertical: wp('8%'),
          backgroundColor: 'white',
          width: '100%',
          borderRadius: wp('4%'),
        }}>
        <Text
          allowFontScaling={false}
          style={{
            fontFamily: 'pSBold',
            fontSize: wp('5%'),
            textAlign: 'center',
            color: 'black',
          }}>
          Peringatan
        </Text>
        <Text
          allowFontScaling={false}
          style={{
            fontFamily: 'pReg',
            fontSize: wp('4%'),
            textAlign: 'center',
            color: 'grey',
          }}>
          Apakah kamu yakin ingin keluar dari akunmu?
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <TouchableOpacity
            onPress={() => {
              logOut();
            }}
            style={{
              marginTop: wp('2%'),
              paddingVertical: wp('2%'),
              backgroundColor: 'white',
              borderWidth: wp('0.5%'),
              borderColor: '#f9a696',
              borderRadius: wp('2%'),
              justifyContent: 'center',
              alignItems: 'center',
              width: '48%',
            }}>
            {proses == false ? (
              <Text
                allowFontScaling={false}
                style={{
                  fontFamily: 'pBold',
                  fontSize: wp('3.5%'),
                  textAlign: 'left',
                  color: '#f9a696',
                  marginTop: wp('1%'),
                }}>
                Ya, Keluar
              </Text>
            ) : (
              <ActivityIndicator
                allowFontScaling={false}
                size="small"
                color="#f9a696"
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              marginTop: wp('2%'),
              paddingVertical: wp('2%'),
              backgroundColor: '#5AADF7',
              borderRadius: wp('2%'),
              justifyContent: 'center',
              alignItems: 'center',
              width: '48%',
            }}>
            <Text
              allowFontScaling={false}
              style={{
                fontFamily: 'pBold',
                fontSize: wp('3.5%'),
                textAlign: 'left',
                color: 'white',
                marginTop: wp('1%'),
              }}>
              Batalkan
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
