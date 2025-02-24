// ToggleButton.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const ToggleButton = () => {
  const [active, setActive] = useState('Type');
  const [slideAnim] = useState(new Animated.Value(0));

  const toggleButton = (option: string) => {
    setActive(option);
    Animated.timing(slideAnim, {
      toValue: option === 'Type' ? 0 : 100, // Adjust based on button width
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { transform: [{ translateX: slideAnim }] }]} />
      <TouchableOpacity
        style={[styles.button, active === 'Type' && styles.activeButton]}
        onPress={() => toggleButton('Type')}
      >
        <Text style={styles.buttonText}>Type</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, active === 'Link' && styles.activeButton]}
        onPress={() => toggleButton('Link')}
      >
        <Text style={styles.buttonText}>Link</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6A5BFF',
    borderRadius: 20,
    padding: 5,
    width: 200,
  },
  button: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
  activeButton: {
    backgroundColor: '#4C4CFF',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  slider: {
    position: 'absolute',
    height: '100%',
    width: '50%',
    backgroundColor: '#fff',
    borderRadius: 20,
    top: 0,
    left: 0,
  },
});

export default ToggleButton;