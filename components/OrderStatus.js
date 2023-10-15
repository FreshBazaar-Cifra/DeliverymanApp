import { Alert, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MyButton from "./MyButton";
import ConfirmModal from "./ConfirmModal";
import { useContext, useState } from "react";
import OrdersService from "../services/OrdersService";
import { AuthContext } from "../context/AuthContext";

const orderStatuses = {
  "created": "Создан",
  "paid": "Оплачен",
  "confirmed": "Подтвержден",
  "delivered": "Доставлен",
};

const orderColor = {
  "created": "#FB1717",
  "paid": "#FB1717",
  "confirmed": "#FF9A02",
  "delivered": "#34E044",
};

const OrderStatus = ({ order, fetchOrder }) => {
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
  const [isDeliveredOpen, setDeliveredOpen] = useState(false);

  const { userToken } = useContext(AuthContext);

  const handleConfirm = () => {
    OrdersService.takeOrder(userToken, order.id)
      .then(res => {
        if (!res.ok) throw new Error("Something went wrong!");
      })
      .then(_ => Alert.alert("", "Заказ успешно взят."))
      .catch(err => {
        Alert.alert("Error", err.message);
      })
      .finally(_ => {
        fetchOrder();
      });
  };

  const handleDelivered = () => {
    OrdersService.completeOrder(userToken, order.id)
      .then(res => {
        if (!res.ok) throw new Error("Something went wrong!");
      })
      .then(_ => Alert.alert("", "Заказ успешно выполнен."))
      .catch(err => {
        Alert.alert("Error", err.message);
      })
      .finally(_ => {
        fetchOrder();
      });
  };

  return (
    <>
      <ConfirmModal
        text={"Вы уверены, что хотите принять заказ?"}
        isOpen={isConfirmModalOpen}
        setOpen={setConfirmModalOpen}
        onConfirm={handleConfirm}
      />

      <ConfirmModal
        text={"Вы уверены, что хотите завершить заказ?"}
        isOpen={isDeliveredOpen}
        setOpen={setDeliveredOpen}
        onConfirm={handleDelivered}
      />

      <View style={{ padding: 16 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 18, color: "#000" }}>Статус заказа:</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 18,
            }}>
            <Icon name="circle" size={8} color={orderColor[order.status]} style={{ marginRight: 4 }} />
            <Text style={{
              fontSize: 16,
              lineHeight: 18,
              color: `${orderColor[order.status] || "gray"}`,
            }}>{orderStatuses[order.status]}</Text>
          </View>
        </View>
        {
          order.status === "created" || order.status === "paid"
            ?
            <TouchableOpacity onPress={() => setConfirmModalOpen(true)} style={{
              backgroundColor: "#EDF1D6",
              borderRadius: 4,
              padding: 16,
              marginVertical: 4,
            }}>
              <Text style={{
                textAlign: "center",
                color: "#676767",
                lineHeight: 16,
                fontSize: 16,
                fontWeight: 600,
              }}>Принять</Text>
            </TouchableOpacity>
            :
            <MyButton onPress={() => setDeliveredOpen(true)} label="Доставлено" />
        }
      </View>
    </>
  );
};

export default OrderStatus;
