import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  homeTop: {
    width: "100%",
    height: 200,
    backgroundColor: "purple",
    position: "relative",
  },
  homeTopPhoto: {
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
  homeTopText: {
    position: "absolute",
    bottom: 70,
    left: 45,
    zIndex: 223,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 45,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#000'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  new: {
      marginVertical: 45,
      marginHorizontal: 10,
      backgroundColor: '#fff',
  },
  item: {
      height: 55,
      width: 100,
  },
  itemPhoto:{
      height: 145,
      width: 145,
  }
});

export default styles;
