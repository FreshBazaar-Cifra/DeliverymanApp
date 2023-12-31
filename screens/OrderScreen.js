import { RefreshControl, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Header from "../components/Header";
import AntDesign from "react-native-vector-icons/AntDesign";
import { getFormattedDateTimeOrder } from "../utils/getFormattedDateTime";
import Footer from "../components/Footer";
import OrderDetails from "../components/OrderDetails";
import { useContext, useEffect, useState } from "react";
import OrdersService from "../services/OrdersService";
import OrderStatus from "../components/OrderStatus";
import OrderMapContainer from "../components/OrderMapContainer";
import { AuthContext } from "../context/AuthContext";
import ErrorText from "../components/ErrorText";
import OrderProductsList from "../components/OrderProductsList";

const OrderScreen = ({ route, navigation }) => {
  const [order, setOrder] = useState({
    id: 21,
    date: "2022-09-28 12:29:21.000000",
    status: "confirmed",
    price: 100,
    delivery_price: 10,
    total: 100,
    market: {
      name: "Центральный рынок",
      address: {
        street: "ул. Пушкинская",
        home: 8,
        latitude: "51.6656114",
        longitude: "39.3921222",
      }
    },
    address: {
      street: "ул. Кольцовская",
      home: "1Д",
      latitude: "51.6750844",
      longitude: "39.2129016",
    }
  });
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { id } = route.params;
  const { userToken } = useContext(AuthContext);

  const fetchOrder = () => {
    setLoading(true);
    OrdersService.getOrderById(userToken, id)
      .then(res => {
        if (!res.ok) throw new Error("Something went wrong!");
        return res.json();
      })
      .then(data => setOrder(data))
      .catch(err => setError(err.message))
      .finally(_ => setLoading(false));
  };

  useEffect(() => {
    // fetchOrder();
  }, [id]);

  console.log(order);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header>
        <TouchableOpacity style={{ marginBottom: 12 }} onPress={() => navigation.navigate("Orders")}>
          <Text style={{ color: "#fff", fontSize: 16 }}>
            <AntDesign size={16} name="left" color="#fff" />
            Заказы
          </Text>
        </TouchableOpacity>
        <View
          style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
          <Text style={{ fontSize: 24, color: "#fff" }}>
            #{id}
          </Text>
          <Text style={{ fontSize: 18, color: "#fff" }}>
            {!isLoading && !error && getFormattedDateTimeOrder(order.date)}
          </Text>
        </View>

      </Header>
      {error && <ErrorText text={error} styles={{textAlign: "center",}} />}
      <ScrollView style={{ flex: 1 }} refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={fetchOrder} />
      }>
        {
          !isLoading && !error && <>

            <OrderMapContainer order={order} />
            <OrderDetails order={order} />
            <OrderStatus order={order} fetchOrder={fetchOrder} />

          </>
        }

      </ScrollView>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

export default OrderScreen;
