import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    paddingTop: 40,
    backgroundColor: "#88D0E4",
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  formContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  subLabel: {
    fontSize: 14,
    marginVertical: 4,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000",
    padding: 16,
    marginHorizontal: 4,
    borderRadius: 7,
    alignItems: "center",
  },
  inputPick: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000",
    marginHorizontal: 4,
    borderRadius: 7,
    alignItems: "center",
  },
  textarea: {
    height: 80,
    textAlignVertical: "top",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  choiceButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000",
    padding: 12,
    marginHorizontal: 4,
    borderRadius: 7,
    alignItems: "center",
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 7,
    marginHorizontal: 4,
    paddingHorizontal: 4,
  },
  picker: {
    width: "100%",
  },

  iconButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    height: 60,
    width: 60,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  bannerUpload: {
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    backgroundColor: "#f0f0f0",
    borderRadius: 4,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
  },
  uploadButton: {
    marginTop: 8,
    padding: 8,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 4,
  },
  imagePlaceholder: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    height: 80,
    width: 80,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  note: {
    fontSize: 12,
    color: "red",
    marginTop: 8,
  },
  selectedButton: {
    backgroundColor: "#4682B4",
    borderColor: "#4682B4",
  },
  selectedText: {
    color: "white",
  },
  choiceText: {
    color: "black",
  },
  submitButton: {
    backgroundColor: "#4682B4",
    padding: 16,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  locationText: {
    textAlign: "left",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: width - 0,
    height: height - 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  modalOption: {
    paddingVertical: 12,
  },
  modalOptionText: {
    fontSize: 16,
  },
  closeModalButton: {
    marginTop: 16,
    paddingVertical: 12,
    backgroundColor: "#1D4ED8",
    borderRadius: 5,
  },
  closeModalButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default styles;
