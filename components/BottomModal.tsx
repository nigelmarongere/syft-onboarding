import { Modal, View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

export default function BottomModal() {
  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={styles.overlay}>
        <View style={styles.sheet}>
            <Text style={styles.step}>1.</Text>
            
            <Text style={styles.label}>First name *</Text>
            <TextInput style={styles.input} placeholder="Jane" />

            <Text style={styles.label}>Last name *</Text>
            <TextInput style={styles.input} placeholder="Doe" />

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Next Step &gt;</Text>
            </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    // backgroundColor: "rgba(0,0,0,0.2)", // Semi-transparent background
  },
  sheet: {
    height: "50%", // Take up 50% of the screen height
    backgroundColor: '#A8E6CF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    elevation: 5,
    justifyContent: 'center'
  },
  step: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#3D5BFF',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
