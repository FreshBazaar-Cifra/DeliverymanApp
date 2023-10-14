import {
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MyButton from "../components/MyButton";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import UserService from "../services/UserService";
import UserInfo from "../components/UserInfo";
import ConfirmModal from "../components/ConfirmModal";
import ErrorText from "../components/ErrorText";

const ProfileScreen = ({ navigation }) => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const { userToken, logout } = useContext(AuthContext);

  const fetchData = () => {
    setLoading(true);
    UserService.getUserData(userToken)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(_ => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", height: "100%", backgroundColor: "#fff" }}>
      <Header>
        <Text style={{ fontSize: 24, color: "#fff" }}>
          Профиль
        </Text>
      </Header>

      <ConfirmModal
        text={"Вы уверены что хотите выйти?"}
        isOpen={modalVisible}
        setOpen={setModalVisible}
        onConfirm={logout}
      />

      <ScrollView
        style={{ padding: 16 }}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={fetchData} />
        }
        contentContainerStyle={{
          display: "flex", justifyContent: "space-between", flex: 1,
        }}
      >
        {
          error && <ErrorText styles={{textAlign: "center",}} text={error} />
        }
        {
          isLoading
            ? <ActivityIndicator size="large" style={{ marginTop: 80 }} />
            : <UserInfo data={data} />
        }
        <View>
          <MyButton styles={{ marginBottom: 16 }} label="НАПИСАТЬ В ПОДДЕРЖКУ" onPress={() => {
          }} />
          <MyButton label="ВЫЙТИ ИЗ АККАУНТА" onPress={() => setModalVisible(true)} type="danger" />
        </View>
      </ScrollView>
      <Footer navigation={navigation} active={2} />
    </SafeAreaView>
  );
};

export default ProfileScreen;
