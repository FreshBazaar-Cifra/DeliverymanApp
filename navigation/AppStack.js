import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BalanceScreen from "../screens/BalanceScreen";
import ProfileScreen from "../screens/ProfileScreen";
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Balance" component={BalanceScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  )
}

export default AppStack;
