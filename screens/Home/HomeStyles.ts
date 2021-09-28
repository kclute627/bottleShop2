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
    color: "#fff",
    fontWeight: "bold",
    fontSize: 45,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  new: {
    marginVertical: 45,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    width: "95%",
    height: 160,
    position: "relative",
    
    
  },
  newTop: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  item: {
    height: 55,
    width: 120,
    paddingTop: 20,
    paddingLeft: 10,
    alignItems: 'center'
    
  },
  text:{
    textAlign: 'center',
    marginTop: 2,
    
    width: '75%'
  },
  price: {
    fontWeight: 'bold'
  },
  itemPhoto: {
    height: 65,
    width: 65,
    borderRadius: 200,
  },
});

export default styles;
