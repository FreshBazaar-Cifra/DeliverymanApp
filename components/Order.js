import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import getFormattedPrice from "../utils/getFormattedPrice";
import { getFormattedDateTimeOrder } from "../utils/getFormattedDateTime";
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import getJoinedAddress from "../utils/getJoinedAddress";

const Order = ({ navigation, order }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleConfirm = () => {
  };

  const orderStatuses = {
    "created": "Новый",
    "confirmed": "Подтвержден",
    "delivered": "Доставлен",
    "paid": "Оплачен",
  };

  const orderColor = {
    "created": "#FB1717",
    "paid": "#FB1717",
    "confirmed": "#FF9A02",
    "delivered": "#34E044",
  };

  return (
    <>
      <ConfirmModal
        text={"Вы уверены, что хотите принять заказ?"}
        isOpen={isModalOpen}
        setOpen={setModalOpen}
        onConfirm={handleConfirm}
      />

      <TouchableOpacity onPress={() => {
        navigation.navigate("Order", { id: order.id });
      }} style={{
        marginBottom: 16,
        borderStyle: "solid",
        borderBottomWidth: 1,
        borderColor: "rgba(0, 0, 0, .2)",
        paddingBottom: 4,
        display: "flex",
        gap: 4,
      }}>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{ fontSize: 18, color: "#000" }}>#{order.id}</Text>
          <View
            style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Icon name="circle" size={8} color={orderColor[order.status]} style={{ marginRight: 4 }} />
            <Text style={{
              fontSize: 16,
              lineHeight: 18,
              color: `${orderColor[order.status]}`,
            }}>{orderStatuses[order.status]}</Text>
          </View>
        </View>
        <View style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomWidth: 1,
          borderStyle: "dotted",
          borderColor: "rgba(0, 0, 0, .2)",
          paddingBottom: 4,
        }}>
          <Text style={{ width: "50%", color: "#A0A0A0" }}>{getFormattedDateTimeOrder(order.date)}</Text>
          <Text style={{ width: "50%", color: "#A0A0A0", textAlign: "right" }}>{getFormattedPrice(order.price)}</Text>
        </View>
        <View style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 8,
        }}>
          <Text style={{ width: "50%", color: "#A0A0A0" }}>{order.market.name}</Text>
          <Text style={{ width: "50%", color: "#A0A0A0", textAlign: "right" }}>{getJoinedAddress(order.address)}</Text>
        </View>
        {
          order.status === "new" && <View>
            <TouchableOpacity onPress={() => setModalOpen(true)} style={{
              backgroundColor: "#EDF1D6",
              borderRadius: 4,
              padding: 6,
              marginVertical: 4,
            }}>
              <Text style={{ textAlign: "center", color: "#676767", lineHeight: 16 }}>Принять</Text>
            </TouchableOpacity>
          </View>
        }
      </TouchableOpacity>
    </>
  );
};

export default Order;
