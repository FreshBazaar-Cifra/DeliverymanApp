import { View } from "react-native";

const Header = ({ styles, children }) => {
  return (
    <View style={[styles, {
      backgroundColor: "#609966",
      padding: 12,
      display: "flex",
      justifyContent: "space-between",
    }]}>
      {children}
    </View>
  )
}

export default Header;
