import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import useTimer from "./useTimer.js";

const Timer = ({ time }) => {
	const [seconds, minutes, hours, stopTime] = useTimer(1000);

	return (
		<View>
			<Text style={styles.timer_text}>
				{minutes}:{seconds}
			</Text>
			<Button title="Stop" onPress={stopTime} />
		</View>
	);
};

const styles = StyleSheet.create({
	timer_text: {
		color: "white",
		fontSize: 40,
	},
});

export default Timer;
