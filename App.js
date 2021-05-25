// Created by Haksatrya Bhaswara
import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
// START Import pages
import Login from './components/Login';
import BottomTab from './BottomTab';
import DLoker from './components/DLoker';
import Logout from './components/Logout';
// END import pages

const Stack = createStackNavigator();
const RootStack = createStackNavigator();
function MainStack({navigation}) {
  const [fullName, setFullName] = useState('');
  const [proses, setProses] = useState(true);
  useEffect(() => {
    const getAsync = async () => {
      const fullNameX = await AsyncStorage.getItem('fullName');
      console.log('NAMA :' + fullNameX);
      if (fullNameX !== null) {
        setFullName(fullNameX);
        navigation.navigate('BottomTab');
        setProses(false);
      } else {
        setProses(false);
      }
    };
    getAsync();
  }, []);
  if (fullName != '') {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="DLoker" component={DLoker} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="DLoker" component={DLoker} />
      </Stack.Navigator>
    );
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          cardStyle: {backgroundColor: 'transparent'},
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({current: {progress}}) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.25, 0.7, 1],
              }),
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: 'clamp',
              }),
            },
          }),
        }}
        headerMode="none"
        mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStack}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Logout"
          component={Logout}
          options={{animationEnabled: true}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
