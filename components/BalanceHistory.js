import { View, Text, ActivityIndicator } from "react-native";
import SelectDropdown from 'react-native-select-dropdown';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useContext, useEffect, useState } from "react";
import UserService from "../services/UserService";
import TransactionsList from "./TransactionsList";
import { AuthContext } from "../context/AuthContext";
import ErrorText from "./ErrorText";

const BalanceHistory = ({refresh, setRefresh}) => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedType, setSelectedType] = useState("Все операции");

  const types = ["Все операции", "Пополнение", "Снятие",];

  const {userToken} = useContext(AuthContext);

  const getFilteredTransactions = () => {
    return transactions.filter(tr => {
      if (selectedType === types[0] ||
        selectedType === types[1] && tr.type === "recharge" ||
        selectedType === types[2] && tr.type === "withdraw") return tr;
    });
  }

  const fetchTransactions = () => {
    setLoading(true);
    UserService.getTransactions(userToken)
      .then(res => {
        if (!res.ok)
          throw new Error("Something went wrong");
        return res.json();
      })
      .then(data => setTransactions(data))
      .catch(err => setError(err.message))
      .finally(_ => setLoading(false));
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  useEffect(() => {
    if (refresh) {
      fetchTransactions();
      setRefresh(false);
    }
  }, [refresh]);

  return (
    <>
      <View style={{padding: 16,}}>
        <Text style={{fontSize: 18, fontWeight: "bold", marginBottom: 8,}}>Операции по балансу</Text>
        <SelectDropdown
          data={types}
          onSelect={selectedItem => setSelectedType(selectedItem)}
          defaultValueByIndex={0}
          renderDropdownIcon={() =>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="rgba(0, 0, 0, .2)"/>
          }
          buttonStyle={{
            backgroundColor: "transparent",
            borderColor: "rgba(0, 0, 0, .2)",
            borderWidth: 1,
            borderRadius: 8,
            margin: 0,
            padding: 0,
          }}
          dropdownStyle={{
            borderRadius: 4,
          }}
          selectedRowStyle={{
            backgroundColor: "#rgba(0,0,0,.1)",
          }}
        />
      </View>
      {
        error && <ErrorText text={error} styles={{textAlign: "center",}} />
      }
      {
        isLoading
          ? <ActivityIndicator size="large" style={{flex: 1, marginTop: -80,}} />
          : <TransactionsList fetchTransactions={fetchTransactions} transactions={getFilteredTransactions()} />
      }
    </>
  )
}

export default BalanceHistory;
