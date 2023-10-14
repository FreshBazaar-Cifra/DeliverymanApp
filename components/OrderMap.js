import { useCallback } from "react";
import { View, Linking, Button } from "react-native";

const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    await Linking.openURL(url);

  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const OrderMap = ({from, to}) => {
  return (
    <View>
      <OpenURLButton url={`yandexmaps://maps.yandex.ru/?ll=${from.latitude}%2C${from.longitude}&mode=routes&rtext=${from.latitude}%2C${from.longitude}~${to.latitude}%2C${to.longitude}&rtt=auto&ruri=ymapsbm1%3A%2F%2Forg%3Foid%3D1250312589~&z=16`}>
        Открыть в приложении Яндекс Карты
      </OpenURLButton>
    </View>
  )
}

export default OrderMap;
