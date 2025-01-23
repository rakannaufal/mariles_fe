// FRONTEND marilesFE: app.js

import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoadingScreen from "./src/screens/LoadingScreens";
import OnboardingScreen from "./src/screens/Onboarding";
import HomeScreens from "./src/screens/HomeScreens";
import CardDetails from "./src/screens/CardDetails";
import Savelist from "./src/screens/Savelist";
import AccountScreens from "./src/screens/AccountScreens";
import StartingScreen from "./src/account/Starting";
import FilterScreens from "./src/screens/FilterScreens";
import SignInPelajar from "./src/account/signInPelajar";
import SignUpPelajar from "./src/account/signUpPelajar";
import SignInPengajar from "./src/account/signInPengajar";
import SignUpPengajar from "./src/account/signUpPengajar";
import ForumScreens from "./src/screens/ForumScreens";
import ForumAnswer from "./src/screens/ForumAnswer";
import ForumQuestion from "./src/screens/ForumQuestion";
import SettingScreens from "./src/screens/SettingScreens";
import ContactScreens from "./src/screens/ContactScreens";
import AboutScreens from "./src/screens/AboutScreens";
import TermsScreens from "./src/screens/TermsScreens";

//pengajar
import HomeScreensPengajar from "./src/pengajar/HomePengajar";
import AccountPengajar from "./src/pengajar/AccountPengajar";
import InfoLes from "./src/pengajar/InfoLes";

//operator
import DataPelajar from "./src/operator/DataPelajar";
import DataPengajar from "./src/operator/DataPengajar";
import DataForum from "./src/operator/DataForum";
import DataContact from "./src/operator/DataContact";
import BannerScreen from "./src/operator/BannerScreen";

import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Dashboard from "./src/operator/DashboardOperator";

const Stack = createStackNavigator();

const TOKEN_EXPIRATION_DAYS = 1;

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(false);
  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const tokenData = await AsyncStorage.getItem("token");
        console.log("Token data from AsyncStorage:", tokenData); // Log the data

        if (tokenData) {
          try {
            const parsedTokenData = JSON.parse(tokenData);
            const { token, expiry } = parsedTokenData;
            const now = new Date();
            if (new Date(expiry) > now) {
              setIsLoggedIn(true);
            } else {
              await AsyncStorage.removeItem("token");
            }
          } catch (parseError) {
            // Remove invalid token data
            await AsyncStorage.removeItem("token");
          }
        }
      } catch (error) {
        console.error("Error checking login status:", error);
      } finally {
        setSplashVisible(false);
      }
    };

    checkLoginStatus();
  }, []);

  const handleLoginPengajar = async (token) => {
    try {
      const expiry = new Date();
      expiry.setDate(expiry.getDate() + TOKEN_EXPIRATION_DAYS);
      await AsyncStorage.setItem(
        "token",
        JSON.stringify({ token, expiry: expiry.toISOString() })
      );
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error handling login:", error);
      Alert.alert("Error", "Failed to login. Please try again.");
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Error handling logout:", error);
      Alert.alert("Error", "Failed to logout. Please try again.");
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={
          isLoggedIn ? "Home" : isOnboardingCompleted ? "Onboarding" : "Loading"
        }
      >
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {(props) => <HomeScreens {...props} onLogout={handleLogout} />}
        </Stack.Screen>
        <Stack.Screen
          name="Forum"
          component={ForumScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForumAnswer"
          component={ForumAnswer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForumQuestion"
          component={ForumQuestion}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Savelist"
          component={Savelist}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={CardDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Setting"
          component={SettingScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Contact"
          component={ContactScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Terms"
          component={TermsScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Account"
          component={AccountScreens}
          options={{ headerShown: false }}
          handleLogout={handleLogout}
        />
        <Stack.Screen
          name="Filter"
          component={FilterScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Starting"
          component={StartingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignInPelajar"
          component={SignInPelajar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpPelajar"
          component={SignUpPelajar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignInPengajar"
          component={SignInPengajar}
          options={{ headerShown: false }}
          handleLoginPengajar={handleLoginPengajar}
        />
        <Stack.Screen
          name="SignUpPengajar"
          component={SignUpPengajar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePengajar"
          component={HomeScreensPengajar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AccountPengajar"
          component={AccountPengajar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InfoLes"
          component={InfoLes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DataPelajar"
          component={DataPelajar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DataPengajar"
          component={DataPengajar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DataForum"
          component={DataForum}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DataContact"
          component={DataContact}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BannerScreen"
          component={BannerScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
