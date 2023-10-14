import { FlatList, RefreshControl } from "react-native";
import Order from "./Order";

const OrdersList = ({navigation, orders, fetchOrders}) => {
  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={fetchOrders} />
      }
      style={{paddingVertical: 12, paddingHorizontal: 8,}}
      data={orders}
      renderItem={({item}) => <Order navigation={navigation} order={item} />}
      keyExtractor={item => item.id}
    />
  )
}

export default OrdersList;