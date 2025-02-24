import { useState } from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

import ToggleButton from "./ToggleButton";

type Props = {
  screen: number
}

export default function BottomModal({screen}: Props) {
  const [isNameSection, setIsNameSection] = useState<boolean>(true);

  const [isFirstFocused, setIsFirstFocused] = useState<boolean>(false);
  const [isLastFocused, setIsLastFocused] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('')

  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          {isNameSection ? (
            <View>
              <Text style={styles.step}>1.</Text>
              
              <Text style={styles.label}>First name *</Text>
              <TextInput 
                style={[styles.input, isFirstFocused && styles.inputFocused]} 
                placeholder={firstName ? firstName : "Jane"}
                onFocus={() => setIsFirstFocused(true)}
                onBlur={() => setIsFirstFocused(false)}
                onChangeText={setFirstName}
                selectionColor="transparent"
              />

              <Text style={styles.label}>Last name *</Text>
              <TextInput 
                style={[styles.input, isLastFocused && styles.inputFocused]} 
                placeholder={lastName ? lastName : "Doe"}
                onFocus={() => setIsLastFocused(true)}
                onBlur={() => setIsLastFocused(false)}
                onChangeText={setLastName}
                selectionColor="transparent"
              />

              <TouchableOpacity 
                style={firstName && lastName ? styles.button : styles.buttonDisabled}
                disabled={!firstName || !lastName}
                onPress={() => setIsNameSection(false)}
              >
                <Text style={styles.buttonText}>Next Step &gt;</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <ToggleButton/>

              <TouchableOpacity style={styles.backButton} onPress={() => setIsNameSection(true)}>
                <Text style={styles.backButtonText}>&lt;</Text>
              </TouchableOpacity>

              <Text style={styles.step}>2.</Text>
              
              <Text style={styles.label}>Email *</Text>
              <TextInput 
                style={[styles.input, isEmailFocused && styles.inputFocused]} 
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
                placeholder="you@example.com"
                onChangeText={setEmail}
              />

              <TouchableOpacity style={email ? styles.button : styles.buttonDisabled} disabled={!email}>
                <Text style={styles.buttonText}>Next Step &gt;</Text>
              </TouchableOpacity>
            </View>
          )}
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
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 20,
    elevation: 5,
    justifyContent: 'center'
  },
  step: {
    fontSize: 16,
    color: '#2B3B7F',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    color: '#2B3B7F',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#2B3B7F',
    borderBottomWidth: 1.5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: "#2B3B7F",
    fontSize: 18,
    outlineColor: "transparent"
  },
  inputFocused: {
    width: '100%',
    height: 50,
    borderColor: '#2B3B7F',
    borderBottomWidth: 4.5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: "#2B3B7F",
    fontSize: 18,
    outlineColor: "transparent"
  },
  button: {
    backgroundColor: '#2B3B7F',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center'
  },
  buttonDisabled: {
    backgroundColor: 'grey',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  backButton: {
    paddingVertical: 25,
    width: '10%'
  },
  backButtonText: {
    color: '#2B3B7F',
    fontSize: 22
  }
});
