import { View, Text } from "react-native";
import { getFormattedDateTimeTransaction } from "../utils/getFormattedDateTime";
import AntDesign from 'react-native-vector-icons/AntDesign';
import getFormattedPrice from "../utils/getFormattedPrice";

const Transaction = ({transaction}) => {
  const getIcon = () => {
    return <AntDesign
      name={transaction.type === "recharge" ? "pluscircle" : "minuscircle"}
      size={48} color="#F9F9F9" backgroundColor="#BCBCBC" style={{borderRadius: 100, height: 48, width: 48,}} />
  }

  return (
    <View style={{marginBottom: 24,}}>
      <Text style={{color: "#9A9A9A", marginBottom: 12,}}>{getFormattedDateTimeTransaction(transaction.date)}</Text>
      <View style={{display: "flex", width: "100%", flexDirection: "row", alignItems: "center", gap: 18,}}>
        {getIcon()}
        <View style={{display: "flex", flexDirection: "row", flex: 1, justifyContent: "space-between"}}>
          <View>
            <Text style={{fontSize: 18, marginBottom: 4, color: "#000"}}>{transaction.type === "recharge" ? "Выполнение заказа" : "Вывод средств"}</Text>
            <Text style={{color: "#9A9A9A",}}>{transaction.type === "recharge" ? "Пополнение" : "Списание"}</Text>
          </View>
          <View>
            <Text style={{fontSize: 18, textAlign: "right", marginBottom: 4, color: "#000"}}>
              {transaction.type === "recharge" ? "+" : "-"}{getFormattedPrice(transaction.sum)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Transaction;
