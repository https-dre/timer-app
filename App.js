import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import Timer from "./src/Timer.jsx";

export default function App() {
	const [isModalVisible, setModalVisible] = useState(true);
	const [inputText, setInputText] = useState("");
	const [timerIsHidden, setTimerIsHidden] = useState(true);

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	const handleSave = () => {
		console.log(inputText);
		toggleModal();
		setTimerIsHidden(false);
		console.log(timerIsHidden);
	};

	return (
		<View style={styles.container}>
			<Modal isVisible={isModalVisible}>
				<View style={styles.modal}>
					<Text>Insira o tempo que deseja</Text>
					<TextInput
						onChangeText={(text) => setInputText(text)}
						value={inputText}
						placeholder="Digite o tempo do pomodoro"
						style={styles.modal_text_input}
					/>
					<Button onPress={handleSave} title="save" />
				</View>
			</Modal>

			{!timerIsHidden && <Timer time={10} />}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "black",
	},
	modal: {
		backgroundColor: "white",
		borderRadius: 12,
		flex: 1,
		alignItems: "left",
		heigth: 0,
		padding: 20,
	},
	modal_text_input: {
		borderWidth: 1,
		borderColor: "gray",
		padding: 12,
		borderRadius: 5,
	},
});
