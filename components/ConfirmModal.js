import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

const ConfirmModal = ({text, isOpen, setOpen, onConfirm}) => {
  return (
    <>
      <Modal
        transparent={true}
        visible={isOpen}
        onRequestClose={() => {
          setOpen(!isOpen);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{fontSize: 18, color: "#000"}}>{text}</Text>
            <View style={{marginLeft: "auto", flexDirection: "row", gap: 16,}}>
              <Pressable
                style={[styles.button, styles.buttonOk]}
                onPress={() => {
                  setOpen(!isOpen);
                  onConfirm();
                }}>
                <Text style={styles.buttonText}>Yes</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonCancel]}
                onPress={() => setOpen(!isOpen)}>
                <Text style={styles.buttonText}>No</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: "rgba(0, 0, 0, .4)",
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 24,
  },
  button: {
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 14,
    elevation: 2,
    marginLeft: "auto",
  },
  buttonOk: {
    backgroundColor: '#3bb63f',
  },
  buttonCancel: {
    backgroundColor: '#e10f0f',
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  }
});

export default ConfirmModal;
