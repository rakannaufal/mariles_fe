import { Platform } from "react-native";

const BASE_URL =
  Platform.OS === "android" ? "http://10.0.2.2:5001" : "http://localhost:5001";

// const BASE_URL = `https://a6fb-2001-448a-1090-4efc-8829-293e-da78-256e.ngrok-free.app`;
export default BASE_URL;
