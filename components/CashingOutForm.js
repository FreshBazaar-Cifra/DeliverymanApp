import { TextInput, View } from "react-native";
import MyButton from "./MyButton";
import getFormattedPrice from "../utils/getFormattedPrice";
import ConfirmModal from "./ConfirmModal";
import { useState } from "react";

const CashingOutForm = ({sum, setSum, balance, handleAsk}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const sumChangeHandler = (text) => {
    let replaced = text.replace(/[^0-9]/g, '');
    if (replaced)
      replaced = Math.min(balance, Number(replaced)).toString();
    setSum(replaced);
  }

  return (
    <>
      <ConfirmModal
        text={`Запросить вывод средств на сумму ${getFormattedPrice(sum)}?`}
        isOpen={isModalOpen}
        setOpen={setModalOpen}
        onConfirm={handleAsk}
      />

      <View style={{margin: 16,}}>
        <TextInput
          style={{borderBottomWidth: 1, borderColor: "#A5A5A5", fontSize: 16, paddingBottom: 2, marginBottom: 24, color: "#000"}}
          onChangeText={sumChangeHandler}
          placeholder="Сумма для вывода"
          value={sum}
        />
        <MyButton label="ЗАПРОСИТЬ" onPress={() => {
          if (sum)
            setModalOpen(true);
        }} />
      </View>
    </>

  )
}

export default CashingOutForm;
