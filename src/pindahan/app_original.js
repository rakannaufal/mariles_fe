import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoadingScreen from "./src/screens/LoadingScreens"; // Path untuk LoadingScreens
import OnboardingScreen from "./src/screens/Onboarding"; // Path untuk Onboarding
import HomeScreens from "./src/screens/HomeScreens"; // Path untuk HomeScreens
import CardDetails from "./src/screens/CardDetails"; // Path untuk CardDetails
import Savelist from "./src/screens/Savelist"; // Path untuk Savelist
import AccountScreens from "./src/screens/AccountScreens"; // Path untuk AccountScreens
import StartingScreen from "./src/account/Starting"; // Path untuk Starting
import FilterScreens from "./src/screens/FilterScreens"; // Path untuk FilterScreens
import SignInPelajar from "./src/account/signInPelajar"; // Path untuk SignInPelajar
import SignUpPelajar from "./src/account/signUpPelajar"; // Path untuk SignUpPelajar
import SignInPengajar from "./src/account/signInPengajar"; // Path untuk SignInPengajar
import SignUpPengajar from "./src/account/signUpPengajar"; // Path untuk SignUpPengajar
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import ForumScreens from "./src/screens/ForumScreens";
import ForumAnswer from "./src/screens/ForumAnswer";
import ForumQuestion from "./src/screens/ForumQuestion";

const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const loginStatus = await AsyncStorage.getItem("isLoggedIn");
        const onboardingStatus = await AsyncStorage.getItem(
          "isOnboardingCompleted"
        );

        if (loginStatus === "true") {
          setIsLoggedIn(true);
        }

        if (onboardingStatus === "true") {
          setIsOnboardingCompleted(true);
        }
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };

    checkLoginStatus();
  }, []);

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
