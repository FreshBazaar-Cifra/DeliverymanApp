import { Text, View } from "react-native";
import getFormattedPrice from "../utils/getFormattedPrice";

const OrderDetails = ({order}) => {
  return (
    <View style={{padding: 16, gap: 8,}}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderStyle: "solid",
          borderBottomWidth: 1,
          borderColor: "#E2E2E2",
          paddingBottom: 4,
        }}>
        <Text style={{ fontSize: 18, }}>Способ оплаты:</Text>
        <Text style={{ color: "#A0A0A0", }}>Онлайн</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderStyle: "solid",
          borderBottomWidth: 1,
          borderColor: "#E2E2E2",
          paddingBottom: 4,
        }}>
        <Text style={{ fontSize: 18, }}>Заказ:</Text>
        <Text style={{ color: "#A0A0A0", }}>{getFormattedPrice(order.price)}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderStyle: "solid",
          borderBottomWidth: 1,
          borderColor: "#E2E2E2",
          paddingBottom: 4,
        }}>
        <Text style={{ fontSize: 18, }}>Доставка:</Text>
        <Text style={{ color: "#A0A0A0", }}>{getFormattedPrice(order.delivery_price)}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderStyle: "solid",
          borderBottomWidth: 1,
          borderColor: "#E2E2E2",
          paddingBottom: 4,
        }}>
        <Text style={{ fontSize: 18, }}>Итого:</Text>
        <Text style={{ color: "#A0A0A0", }}>{getFormattedPrice(order.price + order.delivery_price)}</Text>
      </View>
    </View>
  )
}

export default OrderDetails;
