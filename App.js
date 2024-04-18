import { StyleSheet, Text, View, Button } from 'react-native';
import React from "react";
import useTimer from "./src/useTimer.js";

export default function App() {
  const [seconds, minutes, hours, stopTime] = useTimer(1000);
  
  return (
    <View style={styles.container}>
      <Text>Cronômetro: {hours}:{minutes}:{seconds}</Text>
      <Button title="Stop" onPress={stopTime} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
