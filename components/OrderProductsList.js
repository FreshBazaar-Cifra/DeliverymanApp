import { Text, View } from "react-native";

const OrderProductsList = ({products}) => {
  return (
    <View style={{padding: 16, gap: 8,}}>
      <Text style={{fontSize: 20, }}>Позиции:</Text>
      {
        products.map((product, i) =>
          <View key={i} style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderStyle: "solid",
              borderBottomWidth: 1,
              borderColor: "#E2E2E2",
              paddingBottom: 4,
            }}>
            <Text>{product.product.name}</Text>
            <Text>{product.count}</Text>
          </View>
        )
      }
    </View>
  )
}

export default OrderProductsList;
