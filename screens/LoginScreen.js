import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Image, SafeAreaView, View } from "react-native";
import Input from "../components/Input";
import Icon from 'react-native-vector-icons/Feather';
import MyButton from "../components/MyButton";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {isLoading, login} = useContext(AuthContext);

  const loginHandle = async () => {
    if (!username.trim() || !password.trim()) {
      return;
    }
  }

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', height: "100%", paddingVertical: 64}}>
      <View style={{
        padding: 24,
        alignItems: 'center',
        gap: 24,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flex: 1,
      }}>
        <Image style={{height: 200, width: 220, marginBottom: 32}} source={require("../assets/images/logo.png")}/>

        <Input icon={
          <Icon name="user" size={24} style={{marginRight: 8}} color="#609966"/>
        } type="text" label="USERNAME" value={username} onChange={(text) => setUsername(text)} />

        <Input icon={
          <Icon name="lock" size={24} style={{marginRight: 8}} color="#609966"/>
        } type="password" label="PASSWORD" value={password} onChange={(text) => setPassword(text)} />

        <MyButton isLoading={isLoading} label="Войти" onPress={loginHandle} />
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen;
