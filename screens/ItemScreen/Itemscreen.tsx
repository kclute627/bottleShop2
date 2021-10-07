import React, { ReactElement, useState, useRef, useEffect } from "react";
import { styles } from "./ItemScreen-styles";
import { StatusBar } from "expo-status-bar";
import { Divider, Text } from "react-native-paper";
import * as Haptics from "expo-haptics";
import { AntDesign } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function Itemscreen({ route, navigation }: any): ReactElement {
  const [loading, setLoading] = useState(false);
  const [heart, setHeart] = useState<boolean>();
  console.log(route.params.itemInformation.item);
  const { id } = route.params.itemInformation.item;
  const { name } = route.params.itemInformation.item.item_data;
  const { description } = route.params.itemInformation.item.item_data;
  const { itemInformation, image } = route.params;
  const {amount} = route.params.itemInformation.item.item_data.variations[0].item_variation_data.price_money;

  const company = route.params.itemInformation.item.item_data.variations[0].custom_attribute_values["Square:d9a6f870-d73e-42ef-b494-58ecc88d4e32"]
      .string_value;
  const [quanity, setQuanity] = useState();

  const pickerRef = useRef();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
  ]);
  const [value2, setValue2] = useState(null);
  const [open2, setOpen2] = useState(false);
  const [items2, setItems2] = useState([
    { label: "4 Pack", value: "4 Pack" },
    { label: "12 Pack", value: "12 Pack" },
  ]);

  useEffect(() => {
    isHarted(id);
  });

  const priceHandler = (num: number) => {
    const newNum = num.toString();

    return `$${newNum.slice(0, -2)}.${newNum.slice(-2)}`;
  };
  const heartHandler = async (id: string) => {
    try {
      let heartArray: any = await AsyncStorage.getItem("heart");
      heartArray = JSON.parse(heartArray);
      if (heartArray == null) {
        console.log(JSON.stringify([]), "null");
        return await AsyncStorage.setItem("heart", JSON.stringify([]));
      }

      if (heartArray?.indexOf(id) !== -1) {
        // We have data!!
        heartArray?.splice(heartArray?.indexOf(id));
        await AsyncStorage.setItem("heart", JSON.stringify(heartArray));
        console.log(JSON.stringify(heartArray), "empty");
      } else {
        heartArray = [...heartArray, id];
        await AsyncStorage.setItem("heart", JSON.stringify(heartArray));
        console.log(JSON.stringify(heartArray), "Full");
      }
    } catch (error) {
      // Error retrieving data
    }
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
    isHarted(id);
  };
  const isHarted = async (idd: string) => {
    let heartArray: any = await AsyncStorage.getItem("heart");
    heartArray = JSON.parse(heartArray);

    if (heartArray?.indexOf(idd) !== -1) {
      return setHeart(true);
    } else {
      return setHeart(false);
    }
  };

  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      <StatusBar style="dark" />
      <TouchableOpacity
        style={styles.top_icon}
        onPress={() => navigation.navigate("MainHome")}
      >
        <AntDesign name="back" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.top_icon2}
        onPress={() => heartHandler(id)}
      >
        {heart ? (
          <AntDesign name="heart" size={24} color="red" />
        ) : (
          <AntDesign name="hearto" size={24} color="black" />
        )}
      </TouchableOpacity>

      <View style={styles.top}>
        <Image
          source={{ uri: image }}
          style={styles.image}
          onLoad={() => setLoading(true)}
        />
      </View>

      <View style={styles.middle}>
        {loading ? (
          <>
            <Text style={styles.middle_text}> {company} / {name}</Text>
            <Text style={styles.middle_text2}>{priceHandler(amount)} </Text>
          </>
        ) : (
          <ActivityIndicator size="large" />
        )}
      </View>
      <View style={styles.bottom}>
        <View style={styles.quanityContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.header}>Quanity:</Text>

            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="-"
              style={{ width: 75 }}
              containerStyle={{ width: 75 }}
              listMode="SCROLLVIEW"
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 35,
            }}
          >
            <Text style={styles.header}>Size:</Text>

            <DropDownPicker
              open={open2}
              value={value2}
              items={items2}
              setOpen={setOpen2}
              setValue={setValue2}
              setItems={setItems2}
              placeholder="-"
              style={{ width: 120 }}
              containerStyle={{ width: 120 }}
              listMode="SCROLLVIEW"
            />
          </View>
        </View>
        <View style={styles.cartBtn_container}>
          <TouchableOpacity style={styles.cartBtn}>
            <Text style={{ color: "white", fontSize: 23 }}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dec}>
          <Text style={styles.dec}>{description ? description : null}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
