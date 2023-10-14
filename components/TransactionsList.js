import { FlatList, RefreshControl } from "react-native";
import Transaction from "./Transaction";
const TransactionsList = ({fetchTransactions, transactions}) => {
  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={fetchTransactions} />
      }
      data={transactions}
      renderItem={({item}) => <Transaction transaction={item}/>}
      keyExtractor={(_, index) => index}
      style={{margin: 16, flex: 1,}}
    />
  )
}

export default TransactionsList;
