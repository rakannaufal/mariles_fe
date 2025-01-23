import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const DetailsStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f3f4f6" },
  searchBarContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#bfdbfe",
    alignItems: "center",
  },
  searchInput: { flex: 1, marginHorizontal: 10, fontSize: 16 },
  mainImage: { width: "100%", height: 200 },
  imageScrollContainer: { paddingVertical: 10, paddingLeft: 10 },
  imageScrollContainer: {
    flexDirection: "row",
    marginVertical: 10,
    marginLeft: 10,
  },
  smallImage: { width: 70, height: 70, borderRadius: 10, marginRight: 37 },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  largeImage: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  infoContainer: { padding: 10 },
  title: { fontSize: 24, fontWeight: "bold" },
  titleRow: { flexDirection: "row", justifyContent: "space-between" },
  iconbook: { marginVertical: 6 },
  openTime: { fontSize: 16, color: "gray" },
  locationContainer: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  locationText: { marginLeft: 10 },
  phoneContainer: { flexDirection: "row", marginTop: 10, alignItems: "center" },
  phoneText: { marginLeft: 10 },
  pricingContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  card: {
    backgroundColor: "#0D5782",
    padding: 10,
    borderRadius: 10,
    width: "30%",
  },
  cardTitle: { color: "white", fontWeight: "bold", textAlign: "center" },
  subject: { color: "white" },
  price: { color: "white", textAlign: "center", marginTop: 10 },
  facilitiesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  sectionTitle: { fontWeight: "bold" },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  icon: { backgroundColor: "#0D5782", padding: 10, borderRadius: 10 },
  classType: {
    backgroundColor: "#0D5782",
    padding: 10,
    borderRadius: 10,
    color: "white",
  },
  descriptionContainer: { padding: 10 },
  descriptionText: { color: "gray" },
  ratingContainer: { padding: 10 },
  ratingStars: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  bannerContainer: {
    position: "relative",
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
  },
});
export default DetailsStyles;
