import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeContainer from '../modules/DashboardHome/containers/HomeContainer';
import SearchContainer from '../modules/DashboardSearch/containers/SearchContainer';
import NotifikasiContainer from '../modules/DashboardNotifikasi/containers/NotifikasiContainer';
import UserContainer from '../modules/DashboardUser/containers/UserContainer';
import {IconBell, IconHome, IconSearch, IconUser} from '../property/assets';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: '#B5B5B5',
        tabBarActiveTintColor: '#FF4558',
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="HomeContainer"
        component={HomeContainer}
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.styContBottomTab}>
                <IconHome width={25} height={25} />
                <Text style={styles.styTxt}>•</Text>
              </View>
            ) : (
              <View>
                <IconHome width={24} height={24} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="SearchContainer"
        component={SearchContainer}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.styContBottomTab}>
                <IconSearch width={25} height={25} />
                <Text style={styles.styTxt}>•</Text>
              </View>
            ) : (
              <View>
                <IconSearch width={24} height={24} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="NotifikasiContainer"
        component={NotifikasiContainer}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.styContBottomTab}>
                <IconBell width={25} height={25} />
                <Text style={styles.styTxt}>•</Text>
              </View>
            ) : (
              <View>
                <IconBell width={24} height={24} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="UserContainer"
        component={UserContainer}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <View style={styles.styContBottomTab}>
                <IconUser width={25} height={25} />
                <Text style={styles.styTxt}>•</Text>
              </View>
            ) : (
              <View>
                <IconUser width={24} height={24} />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  styContBottomTab: {
    marginTop: 5,
  },
  styTxt: {
    textAlign: 'center',
    color: '#221F1F',
    marginTop: -5,
  },
});
