import { View, Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import OrderMap from "./OrderMap";
import getJoinedAddress from "../utils/getJoinedAddress";

const OrderMapContainer = ({ order }) => {
  if (Object.keys(order).length === 0) return;
  return (
    <View style={{ flex: 1, }}>
      <View style={{
        margin: 16,
        paddingBottom: 16,
        gap: 8,
        borderStyle: "solid",
        borderBottomWidth: 1,
        borderColor: "rgba(0, 0, 0, .2)"
      }}>
        <View style={{ flexDirection: "row", gap: 8, alignItems: "center", }}>
          <AntDesign size={44} name="export" color="#33363F"/>
          <View>
            <Text style={{ fontSize: 14, color: "#000" }}>{order?.market?.name}</Text>
            <Text style={{ color: "#A3A3A3", }}>{getJoinedAddress(order?.market?.address)}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 8, alignItems: "center", }}>
          <MaterialIcons size={44} name="outlined-flag" color="#33363F"/>
          <View>
            <Text style={{ fontSize: 14, color: "#000" }}>{getJoinedAddress(order?.address)}</Text>
          </View>
        </View>

        <OrderMap from={order?.market?.address} to={order?.address}/>
      </View>
    </View>
  );
}

export default OrderMapContainer;
