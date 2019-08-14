import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Text } from "react-native";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { userReg } from "../resources/redux-actions/auth";
import "../styles/core/utilis";

class Profile extends Component {
	state = {
		firstName: "",
		lastname: "",
		email: "",
		password: "",
		confirm: "",
	};

	handleText(value, name) {
		console.log(value, name);
		// this.setState({
		// 	[name]: value,
		// });
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={utilis.child_container}>
					<Text style={{ ...utilis.text, ...utilis.margin_bottom_lg }}>Setup profile</Text>
					<InputField
						autoFocus={true}
						name
						onChangeText={text => {
							this.handleText(text, "numorEmail");
						}}
						placeholder="First name"
					/>
					<InputField
						onChangeText={text => {
							this.handleText(text, "numorEmail");
						}}
						placeholder="Last name"
					/>
					<InputField
						onChangeText={text => {
							this.handleText(text, "numorEmail");
						}}
						placeholder="Email address"
					/>
					<InputField
						onChangeText={text => {
							this.handleText(text, "numorEmail");
						}}
						placeholder="Password"
						secureTextEntry={true}
					/>
					<InputField
						onChangeText={text => {
							this.handleText(text, "numorEmail");
						}}
						placeholder
						placeholder="Confirm password"
					/>
					<Button
						title={"Continue"}
						style={styles.margin_top}
						onPress={() => {
							console.log("funky");
							// props.navigation.navigate("Verification");
						}}
					/>
				</View>
			</View>
		);
	}
}

Profile.navigationOptions = {
	title: "Profile",
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 55,
	},
	margin_top: {
		marginTop: 50,
	},
});

export default connect(
	null,
	{ userReg },
)(Profile);
