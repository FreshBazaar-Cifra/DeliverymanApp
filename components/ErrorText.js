import { Text } from "react-native";

const ErrorText = ({styles, text}) => {
  return (
    <Text style={[styles, { color: "red", fontSize: 18, }]}>
      {text}
    </Text>
  )
}

export default ErrorText;
