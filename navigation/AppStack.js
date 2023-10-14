import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BalanceScreen from "../screens/BalanceScreen";
import ProfileScreen from "../screens/ProfileScreen";
import OrdersScreen from "../screens/OrdersScreen";
import OrderScreen from "../screens/OrderScreen";
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Balance" component={BalanceScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Orders" component={OrdersScreen} />
      <Stack.Screen name="Order" component={OrderScreen} />
    </Stack.Navigator>
  )
}

export default AppStack;
