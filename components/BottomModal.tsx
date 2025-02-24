import { useState } from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';

import ToggleButton from "./ToggleButton";

type Props = {
  setTitle: (title: string) => void,
  setPrompt: (prompt: string) => void
}

export default function BottomModal({setTitle, setPrompt}: Props) {
  const [isNameSection, setIsNameSection] = useState<boolean>(true);

  const [isFirstFocused, setIsFirstFocused] = useState<boolean>(false);
  const [isLastFocused, setIsLastFocused] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('')

  const [active, setActive] = useState('Type');

  const nextStep = () => {
    setIsNameSection(false);
    setTitle('Nice!')
    setPrompt('How should we set this up? *')
  }

  const backStep = () => {
    setIsNameSection(true);
    setTitle('Hey!')
    setPrompt('What should we call you? *')
  }

  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={styles.overlay}>
        <View style={isNameSection ? styles.sheetName : styles.sheetNotName}>
          {isNameSection ? (
            <View>
              <Text style={styles.step}>1.</Text>
              
              <Text style={styles.label}>First name *</Text>
              <TextInput 
                style={[styles.input, isFirstFocused && styles.inputFocused]} 
                placeholder={firstName ? firstName : "Jane"}
                placeholderTextColor="#4B5A8F"
                onFocus={() => setIsFirstFocused(true)}
                onBlur={() => setIsFirstFocused(false)}
                onChangeText={setFirstName}
                selectionColor="transparent"
              />

              <Text style={styles.label}>Last name *</Text>
              <TextInput 
                style={[styles.input, isLastFocused && styles.inputFocused]} 
                placeholder={lastName ? lastName : "Doe"}
                placeholderTextColor="#4B5A8F"
                onFocus={() => setIsLastFocused(true)}
                onBlur={() => setIsLastFocused(false)}
                onChangeText={setLastName}
                selectionColor="transparent"
              />

              <TouchableOpacity 
                style={firstName && lastName ? styles.button : styles.buttonDisabled}
                disabled={!firstName || !lastName}
                onPress={() => nextStep()}
              >
                <Text style={styles.buttonText}>Next Step &gt;</Text>
              </TouchableOpacity>
            </View>
            ) : (
            active === 'Type' ? (
              <View>
                <View style={styles.backAndToggleContainer}>
                  <TouchableOpacity style={styles.backButton} onPress={() => backStep()}>
                    <Text style={styles.backButtonText}>&lt;</Text>
                  </TouchableOpacity>
                  <ToggleButton active={active} setActive={setActive}/>
                </View>

                <Text style={styles.step}>2.</Text>
                
                <Text style={styles.label}>Email address *</Text>
                <TextInput 
                  style={[styles.input, isEmailFocused && styles.inputFocused]} 
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                  placeholder={email ? email : "janedoe@gmail.com"}
                  placeholderTextColor="#4B5A8F"
                  onChangeText={setEmail}
                />

                <TouchableOpacity style={email ? styles.button : styles.buttonDisabled} disabled={!email}>
                  <Text style={styles.buttonText}>Next Step &gt;</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <View style={styles.backAndToggleContainer}>
                  <TouchableOpacity style={styles.backButton} onPress={() => setIsNameSection(true)}>
                    <Text style={styles.backButtonText}>&lt;</Text>
                  </TouchableOpacity>
                  <ToggleButton active={active} setActive={setActive}/>
                </View>

                <Text style={styles.step}>2.</Text>

                <Text style={styles.label}>Link an existing account *</Text>
                <Text style={styles.info}>Selecting this option will redirect you to a separate screen to complete the login process.</Text>
                <Text style={styles.info}>You'll be redirected back here once done.</Text>

                <View style={styles.linkButtonContainer}>
                  <TouchableOpacity style={styles.linkButton}>
                    <FontAwesome6 style={styles.linkButtonIcon} name="google" size={20} color="white"/>
                    <Text style={styles.linkButtonText}>  Continue with Google</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.linkButton}>
                    <AntDesign style={styles.linkButtonIcon} name="apple1" size={24} color="white"/>
                    <Text style={styles.linkButtonText}> Continue with Apple</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
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
  sheetName: {
    height: "50%", // Take up 50% of the screen height
    backgroundColor: '#A8E6CF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 20,
    elevation: 5,
    justifyContent: 'center',
  },
  sheetNotName: {
    height: "50%", // Take up 50% of the screen height
    backgroundColor: '#A8E6CF',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 20,
    elevation: 5
  },
  step: {
    fontSize: 16,
    color: '#2B3B7F',
    marginBottom: 10,
    paddingVertical: 10,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
    color: '#2B3B7F',
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontWeight: 'bold',
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
  },
  backAndToggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  info: {
    color: '#4B5A8F',
    marginVertical: 10
  },
  linkButton: {
    backgroundColor: '#2B3B7F',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    width: '70%',
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'left'
  },
  linkButtonIcon: {
    color: '#fff',
  },
  linkButtonContainer: {
    paddingTop: '5%',
    justifyContent: 'center'
  }
});
