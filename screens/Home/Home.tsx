import React, { useEffect, useState } from "react";
import { Image, FlatList, TouchableOpacity } from "react-native";
import AppLoading from "expo-app-loading";
import styles from "./HomeStyles";
import axios from "axios";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import { ScrollView } from "react-native-gesture-handler";

type RenderItem = {
  item: {
    id: string;
    image_id: string;
    item_data: {
      name: string;
      variations: [
        {
          item_variation_data: {
            price_money: number;
          };
        }
      ];
    };
  };
};
type RenderImage = {
  id: string;
  image_id: string;
  item: {
    image_id: string;
  };
};

export default function Home({ navigation }: RootTabScreenProps<"TabOne">) {
  const renderItem = ({ item }: RenderItem): React.ReactElement => {
    const url: any =
      images.length > 0 &&
      images.find((cur: RenderImage): boolean => cur.id === item.image_id);

    const { amount }: any =
      item.item_data.variations[0].item_variation_data.price_money;
    return (
      <View style={styles.item} key={item.id}>
        <TouchableOpacity>
        
          <Image
            source={{ uri: url.image_data.url }}
            style={styles.itemPhoto}
          />
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.text}>
          {item.item_data.name}
        </Text>
        <Text style={styles.price}>
          ${amount.toString().slice(0, -2)}.{amount.toString().slice(-2)}
        </Text>
      </View>
    );
  };

  const [images, setImages] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getImages();
    getItems();
  }, []);

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
      <View style={styles.new}>
        <View style={styles.newTop}>
          <Text style={styles.title}>Whats New</Text>
          <Text style={styles.title}>See All</Text>
        </View>

        {images.length <= 1 || items.length <= 1 ? (
          <AppLoading />
        ) : (
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            horizontal
          />
        )}
      </View>
    </ScrollView>
  );
}
