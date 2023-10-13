import { TouchableOpacity, Text, ActivityIndicator } from "react-native";

export default function MyButton({isLoading, styles, label, onPress, type}) {
  return (
    <TouchableOpacity
      disabled={isLoading}
      onPress={onPress}
      style={{
        ...styles,
        backgroundColor: `${type === "danger" ? "#E25B5B" : "#609966"}`,
        width: "100%",
        padding: 16,
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: 4,
        shadowRadius: 2,
        elevation: 4,
      }}
    >
      {
        isLoading
          ? <ActivityIndicator />
          :
          <Text style={{
            color: "#ffffff",
            fontSize: 16,
            textTransform: "uppercase",
            textAlign: "center",
            fontWeight: 600,
          }}>{label}
          </Text>
      }
    </TouchableOpacity>
  )
}
