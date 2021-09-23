import * as React from "react";
import { Image, FlatList } from "react-native";
import styles from "./HomeStyles";

import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import { ScrollView } from "react-native-gesture-handler";

type RenderItem = {
  item: {
    title: string;
    brewery: string;
    photo: any;
    price: number;
  };
};
const whatsNew = [
  {
    title: "Dasiey Cutter",
    brewery: "Half Acre",
    photo: "../../assets/images/beer1.png",
    price: 9.99,
  },
];

export default function Home({ navigation }: RootTabScreenProps<"TabOne">) {
  const renderItem = ({ item }: RenderItem): React.ReactElement => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
      <Text>${item.price}</Text>
      <Image
        source={require("../../assets/images/beer1.png")}
        style={styles.itemPhoto}
      />
    </View>
  );

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
        <Text style={styles.title}>Whats New</Text>
        <FlatList
          data={whatsNew}
          keyExtractor={(item) => item.title}
          renderItem={renderItem}
        />
      </View>
    </ScrollView>
  );
}
