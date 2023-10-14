import { SafeAreaView, Text, ActivityIndicator } from "react-native";
import Header from "../components/Header";
import { useContext, useEffect, useState } from "react";
import OrdersService from "../services/OrdersService";
import OrdersList from "../components/OrdersList";
import Footer from "../components/Footer";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SelectDropdown from "react-native-select-dropdown";
import ErrorText from "../components/ErrorText";
import { AuthContext } from "../context/AuthContext";

const OrdersScreen = ({ navigation }) => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");

  const selectData = ["Действующие", "Созданные", "Оплаченные", "Принятые", "История"];
  const types = ["all", "created", "paid", "confirmed", "delivered"];

  const {userToken} = useContext(AuthContext);

  const fetchAllOrders = () => {
    setLoading(true);
    setError("");
    OrdersService.getAllOrders(userToken)
      .then(res => {
        if (res.status === 404) throw new Error("Заказов не найдено")
        if (!res.ok) throw new Error("Something went wrong!");
        return res.json();
      })
      .then(data => setOrders(data))
      .catch(err => {
        setError(err.message);
      })
      .finally(_ => setLoading(false));
  }

  const fetchOrders = () => {
    setLoading(true);
    setError("");
    OrdersService.getOrdersByStatus(userToken, filter)
      .then(res => {
        if (res.status === 404) throw new Error("Заказов не найдено")
        if (!res.ok) throw new Error("Something went wrong!");
        return res.json();
      })
      .then(data => {
        setOrders(data);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(_ => setLoading(false));
  };

  useEffect(() => {
    filter === "all" ? fetchAllOrders() : fetchOrders();
  }, [filter]);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", height: "100%", backgroundColor: "#fff" }}>
      <Header styles={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 24, color: "#fff" }}>
          Заказы
        </Text>

        <SelectDropdown
          data={selectData}
          onSelect={(_, index) => setFilter(types[index])}
          defaultValueByIndex={0}
          renderDropdownIcon={() =>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="rgba(0, 0, 0, .2)" />
          }
          buttonTextStyle={{ color: "#FFF" }}
          buttonStyle={{
            backgroundColor: "transparent",
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
      </Header>

      {error &&
        <ErrorText text={error} styles={{ textAlign: "center", marginTop: 12 }} />}

      {
        isLoading
          ? <ActivityIndicator size="large" style={{ flex: 1, marginTop: -80 }} />
          : <OrdersList
            fetchOrders={fetchOrders}
            navigation={navigation}
            orders={orders.filter(order => {
              if (filter === "all" && order.status !== "delivered" ||
                filter === order.status
              ) return order;
            })} />
      }
      <Footer navigation={navigation} active={0} />
    </SafeAreaView>
  );
};

export default OrdersScreen;
