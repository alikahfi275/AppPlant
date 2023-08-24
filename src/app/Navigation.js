import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeContainer from '../modules/DashboardHome/containers/HomeContainer';
import SearchContainer from '../modules/DashboardSearch/containers/SearchContainer';
import NotifikasiContainer from '../modules/DashboardNotifikasi/containers/NotifikasiContainer';
import UserContainer from '../modules/DashboardUser/containers/UserContainer';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  );
}

export default App;
