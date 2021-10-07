import React from "react";
import styles from "./HomeStyles";
import { Image, FlatList, TouchableOpacity } from "react-native";
import AppLoading from "expo-app-loading";

import { RenderItem, RenderImage } from "../../types";
import { Text, View } from "../../components/Themed";


type Props = {
  title: string;
  items: any[];
  navigation: any;
  images: any
};


export default function HomeScrollView({ title, items, navigation, images }: Props) {

    console.log(items)
  const renderItem = ({ item }: RenderItem): React.ReactElement => {
    const url: any =
      images.length > 0 &&
      images.find((cur: RenderImage): boolean => cur.id === item.image_id);

    const { amount }: any =
      item.item_data.variations[0].item_variation_data.price_money;
    return (
      <View style={styles.item} key={item.id}>
        <TouchableOpacity
          onPress={(): void => {
            navigation.navigate("ItemScreen", {
              itemInformation: { item },
              image: url.image_data.url,
            });
          }}
        >
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

  return (
    <View style={styles.new}>
      <View style={styles.newTop}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>See All</Text>
      </View>

      {images.length <= 0 || items.length <= 0 ? (
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
  );
}
