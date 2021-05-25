import React, {useState} from 'react';
import {View, Text, Modal} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// START Import pages
import Home from './components/Home';
import Loker from './components/Loker';
import {createStackNavigator} from '@react-navigation/stack';

// END import pages
const DummyLogout = () => {
  return <View style={{flex: 1, backgroundColor: 'blue'}}></View>;
};
const Tab = createBottomTabNavigator();

export default function BottomTab() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Tab.Navigator
      mode="modal"
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#356b99',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Loker"
        component={Loker}
        options={{
          tabBarLabel: 'Job Vacancies',
          tabBarIcon: ({color, size}) => (
            <Feather name="briefcase" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Modal"
        component={DummyLogout}
        listeners={({navigation, route}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('Logout');
          },
        })}
        options={{
          tabBarLabel: 'Logout',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="logout" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
