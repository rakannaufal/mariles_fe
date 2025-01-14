// homeStyles.js
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainContent: {
    flex: 1,
    padding: 16,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingBottom: 8,
  },

  locationTouchable: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  locationText: {
    marginHorizontal: 8,
    fontSize: 16,
    flex: 1, // Membuat text mengambil ruang yang tersedia
  },

  carousel: {
    height: 150,
  },
  banner: {
    width: width,
    height: 150,
    borderRadius: 10,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "gray",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "blue",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 16,
  },
  cardWrapper: {
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 16,
    width: "48%",
  },
  cardImage: {
    width: "100%",
    height: 100,
  },
  cardContent: {
    padding: 8,
    backgroundColor: "#88D0E4",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
  filterButton: {
    paddingHorizontal: 6,
    marginLeft: "auto",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 8,
  },
  tag: {
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 4,
    marginBottom: 4,
  },
  tagText: {
    fontSize: 12,
    color: "#black",
    fontWeight: "semibold",
  },
  cardPrice: {
    fontSize: 14,
    color: "black",
    marginBottom: 8,
  },
  locationAndRating: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardLocation: {
    fontSize: 12,
    color: "black",
    fontWeight: "semibold",
  },
  cardRatingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardRating: {
    fontSize: 14,
    color: "black",
    fontWeight: "semibold",
    marginLeft: 4,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 16,
    backgroundColor: "#88D0E4",
    bottom: 0,
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
