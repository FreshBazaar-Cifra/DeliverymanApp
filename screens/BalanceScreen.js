import { SafeAreaView, View, Text, ActivityIndicator, Alert } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext, useEffect, useState } from "react";
import UserService from "../services/UserService";
import getFormattedPrice from "../utils/getFormattedPrice";
import CashingOutForm from "../components/CashingOutForm";
import BalanceHistory from "../components/BalanceHistory";
import ErrorText from "../components/ErrorText";
import { AuthContext } from "../context/AuthContext";

const BalanceScreen = ({navigation}) => {
  const [balance, setBalance] = useState(0);
  const [sum, setSum] = useState("");
  const [balanceLoading, setBalanceLoading] = useState(false);
  const [balanceError, setBalanceError] = useState("");
  const [refresh, setRefresh] = useState(false);

  const {userToken} = useContext(AuthContext);

  const fetchBalance = () => {
    setBalanceLoading(true);
    UserService.getBalance(userToken)
      .then(res => {
        if (!res.ok)
          throw new Error("Something went wrong.");
        return res.json();
      })
      .then(data => {
        setBalance(Number(data.sum));
      })
      .catch(err => {
        setBalanceError(err.message);
      })
      .finally(_ => setBalanceLoading(false));
  }

  const handleAsk = () => {
    if (!sum) return;
    UserService.withdraw(userToken, sum)
      .then(res => {
        if (!res.ok) throw new Error("Something went wrong!");
        setSum("");
        setRefresh(true);
      })
      .catch(err => {
        Alert.alert("Error", err.message);
      })
      .finally(_ => {
        fetchBalance();
      });
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#fff",}}>
      <Header>
        <Text style={{fontSize: 24, color: "#fff"}}>
          Баланс
        </Text>
      </Header>

      <View style={{
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: 4,
        shadowRadius: 8,
        elevation: 8,
        borderRadius: 8,
        padding: 12,
        margin: 16,
        marginBottom: 0,
      }}>
        <Text style={{color: "#A89E9E", fontSize: 12,}}>Ваш баланс</Text>
        {
          balanceError ? <ErrorText text={balanceError} />
            :
            balanceLoading
              ? <ActivityIndicator style={{alignSelf: "flex-start", marginTop: 8,}} />
              : <Text style={{fontSize: 24, color: "#000"}}>{getFormattedPrice(balance)}</Text>
        }
      </View>
      <CashingOutForm sum={sum} setSum={setSum} balance={balance} handleAsk={handleAsk} />
      <BalanceHistory refresh={refresh} setRefresh={setRefresh}/>
      <Footer navigation={navigation} active={1}/>
    </SafeAreaView>
  )
}

export default BalanceScreen;
