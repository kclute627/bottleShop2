import React, { useEffect, useState } from "react";
import { Image} from "react-native";

import styles from "./HomeStyles";
import axios from "axios";
import HomeScrollView from "./HomeScrollView";
import { getSpecificItems } from "../../utils";

import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import { ScrollView } from "react-native-gesture-handler";

export default function Home({ navigation }: RootTabScreenProps<"TabOne">) {
  

  const [images, setImages] = useState([]);
  const [items, setItems] = useState([]);

  const [craftItems, setCraftItems] = useState([]);
  const [beerItems, setBeerItems] = useState([]);
  const [wineItems, setWineItems] = useState([]);
  const [spiritsItems, setSpiritsItems] = useState([]);

  useEffect(() => {
    getImages();
    getItems();
  }, []);

  const categories = {
    craft: "Square:063b6cc4-e1b9-4d9e-a781-ba64ad6defd4",
    beer: "Square:439e3f38-458b-400c-8e6f-4a8486a8a4a7",
    wine: "Square:7d0f15ee-09bb-4840-ba45-15e3d42e25ff",
    spirits: "Square:ab35542b-7511-418c-8b12-ec132ca8ea47",
  };

  useEffect(() => {
    getSpecificItems(items, setCraftItems, categories.craft);
    getSpecificItems(items, setBeerItems, categories.beer);
    getSpecificItems(items, setWineItems, categories.wine);
    getSpecificItems(items, setSpiritsItems, categories.spirits);
  }, [items]);

  const config = {
    headers: {
      Authorization:
        "Bearer EAAAEH4RvSStHqoTTLqBmAEa4tuvJg5qQbN_PtOpfDOnBEprrZHG9iqrnMU-bhwP",
    },
  };
  const getItems = async () => {
    const { data } = await axios.get(
      "https://connect.squareupsandbox.com/v2/catalog/list?types=ITEM",
      config
    );
    setItems(data.objects);
  };
  const getImages = async () => {
    const { data } = await axios.get(
      "https://connect.squareupsandbox.com/v2/catalog/list?types=IMAGE",
      config
    );

    setImages(data.objects);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.homeTop}>
        <Image
          style={styles.homeTopPhoto}
          source={require("../../assets/images/beerBackground.jpg")}
        />
        <Text style={[styles.homeTopText]}></Text>
      </View>

      <HomeScrollView
        title="New"
        items={craftItems}
        navigation={navigation}
        images={images}
      />
      <HomeScrollView
        title="Beer"
        items={beerItems}
        navigation={navigation}
        images={images}
      />
      <HomeScrollView
        title="Wine"
        items={wineItems}
        navigation={navigation}
        images={images}
      />
      <HomeScrollView
        title="Spirits"
        items={spiritsItems}
        navigation={navigation}
        images={images}
      />
    </ScrollView>
  );
}
