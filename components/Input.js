import { TextInput, View } from "react-native";

export default function Input({
  label,
  icon,
  type,
  value,
  onChange,
}) {
  return (
    <View style={{
      flexDirection: "row",
      alignItems: "center",
      borderColor: "#609966",
      borderWidth: 1,
      paddingVertical: 6,
      paddingHorizontal: 16,
      width: "100%",
      borderRadius: 4,
    }}>
      {icon}
      {
        type === "password" ? (
          <TextInput
            style={{
              color: "#609966",
              fontSize: 16,
              width: "90%",
            }}
            placeholder={label}
            placeholderTextColor="#609966"
            secureTextEntry={true}
            value={value}
            onChangeText={onChange}
          />
        ) : (
          <TextInput
            style={{
              color: "#609966",
              fontSize: 16,
              width: "90%",
            }}
            placeholderTextColor="#609966"
            placeholder={label}
            value={value}
            onChangeText={onChange}
          />
        )
      }
    </View>
  )
}
