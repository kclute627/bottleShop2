import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    height: 455,
    width: "100%",
    marginTop: -50,
  },
  top: {
    position: "relative",
  },
  top_icon: {
    top: 50,
    left: 10,
    height: 45,
    width: 45,
    zIndex: 66,
    borderRadius: 333,
    backgroundColor: "rgba(247, 247, 247, 0.87)",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  top_icon2: {
    top: 50,
    right: 20,
    height: 45,
    width: 45,
    zIndex: 66,
    borderRadius: 333,
    backgroundColor: "rgba(247, 247, 247, 0.87)",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  middle: {
    marginLeft: 15,
  },
  middle_text: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
  },
  middle_text2: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,

    paddingHorizontal: 15,
  },
  bottom: {},
  quanityContainer: {
    justifyContent: "space-around",

    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
  },
  container: {
    flex: 1,
    position: "relative",
  },

  inner: {
    justifyContent: "center",
    textAlign: "center",
    marginTop: 15,

    alignItems: "center",

    flexDirection: "row",
  },
  header: {
    fontSize: 16,
    marginRight: 5,
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },
  cartBtn_container: {
    zIndex: -1,

    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
  cartBtn: {
    backgroundColor: "blue",
    padding: 15,
    width: 270,
    textAlign: "center",
    alignItems: "center",
    color: "white",
  },
  dec: {
    zIndex: -100,
  }
});
