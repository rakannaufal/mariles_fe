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
import AsyncStorage from "@react-native-async-storage/async-storage";
import ForumScreens from "./src/screens/ForumScreens";
import ForumAnswer from "./src/screens/ForumAnswer";
import ForumQuestion from "./src/screens/ForumQuestion";
import { Alert } from "react-native";

const Stack = createStackNavigator();

const TOKEN_EXPIRATION_DAYS = 2;

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

  const handleLogin = async (token) => {
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
        <Stack.Screen
          name="Home"
          component={HomeScreens}
          options={{ headerShown: false }}
        />
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
        />
        <Stack.Screen
          name="SignUpPengajar"
          component={SignUpPengajar}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
