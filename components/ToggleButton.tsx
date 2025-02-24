// ToggleButton.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

type Props = {
    active: string,
    setActive: (active: string) => void;
}

export default function ToggleButton({ active, setActive }: Props) {
  const [slideAnim] = useState(new Animated.Value(0));

  const toggleButton = (option: string) => {
    setActive(option);
    Animated.timing(slideAnim, {
      toValue: option === 'Type' ? 0 : 50, // Adjust based on button width
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
    backgroundColor: '#6A9B8F',
    borderRadius: 17.5,
    padding: 5,
    width: 100,
    height: '45%',

    position: 'absolute',
    left: '50%',
    transform: [{ translateX: '-50%' }]
  },
  button: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    borderRadius: 17.5,
  },
  activeButton: {

  },
  buttonText: {
    color: '#2B3B7F',
    fontSize: 16
  },
  slider: {
    position: 'absolute',
    height: '100%',
    width: '50%',
    backgroundColor: '#fff',
    borderRadius: 17.5,
    top: 0,
    left: 0,
  },
});
