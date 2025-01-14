import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
  },
  text: {
    fontSize: 24,
    color: "blue",
    fontWeight: "bold",
    marginBottom: 20,
  },
  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: "skyblue",
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: "yellow",
  },
});

export default styles;
