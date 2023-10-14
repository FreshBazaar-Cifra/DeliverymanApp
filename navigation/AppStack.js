import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BalanceScreen from "../screens/BalanceScreen";
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Balance" component={BalanceScreen} />
    </Stack.Navigator>
  )
}

export default AppStack;
