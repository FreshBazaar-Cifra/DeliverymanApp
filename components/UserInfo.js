import { View, Text, Image } from "react-native";

const UserInfo = ({data}) => {
  return (
    <View style={{display: "flex", alignItems: "center", gap: 8,}}>
      <Text style={{fontSize: 20, color: "#494949", fontWeight: "bold"}}>{data.first_name} {data.last_name}</Text>
      <Text style={{fontSize: 20, color: "#494949", fontWeight: "bold"}}>{data.phone}</Text>
    </View>
  )
}

export default UserInfo;
