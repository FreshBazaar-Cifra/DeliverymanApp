import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";

export function AppNav() {
  const {isLoading, userToken} = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <AuthStack/>
    </NavigationContainer>
  )
}