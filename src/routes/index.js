import * as React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { NativeRouter, Route, Switch } from "react-router-native";
import HomeScreen from "../screens/HomeScreen";
import OtpVerifications from "../screens/OtpVerfications";
import LoginScreen from "../screens/LoginScreen";
import SocialLogin from "../screens/SocialLogin";
import Profile from "../screens/Profile";
import VerificationScreen from "../screens/VerificationScreen";
import ResetPassword from "../screens/ResetPassword";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { RegisterConnector } from "../modules/register/RegisterConnector";

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        OTP: {
            screen: OtpVerifications
        },
        Login: {
            screen: LoginScreen
        },
        SocialLogin: {
            screen: SocialLogin
        },
        Profile: {
            screen: Profile
        },
        Verification: {
            screen: VerificationScreen
        },
        ResetPassword: {
            screen: ResetPassword
        }
    },
    {
        // initialRouteName: "Profile",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#fff",
                borderBottomColor: "#f3f3f3",
                borderBottomWidth: 4
            },
            headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 17,
                color: "#002257"
            }
        }
    }
);

export default createAppContainer(AppNavigator);
