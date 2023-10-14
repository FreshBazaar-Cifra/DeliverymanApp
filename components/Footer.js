import { View, TouchableOpacity } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Footer = ({navigation, active}) => {
  return (
    <View style={{
      backgroundColor: "#9DC08B",
      height: 80,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    }}>
      <TouchableOpacity onPress={() => {navigation.navigate('Orders')}}>
        <FontAwesome name="list-alt" size={48} color={active === 0 ? "#609966" : "#62725f"} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('Balance')}}>
        <FontAwesome5 name="coins" size={40} color={active === 1 ? "#609966" : "#62725f"} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('Profile')}}>
        <FontAwesome name="user" size={48} color={active === 2 ? "#609966" : "#62725f"} />
      </TouchableOpacity>
    </View>
  )
}

export default Footer;
