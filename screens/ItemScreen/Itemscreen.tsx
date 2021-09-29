import React, { ReactElement, useState } from "react";
import { styles } from "./ItemScreen-styles";
import AppLoading from "expo-app-loading";
import { Text, View, Image, ActivityIndicator } from "react-native";

export default function Itemscreen({ route }: any): ReactElement {
  const [loading, setLoading] = useState(false);

  console.log(route.params.itemInformation.item);
  const { itemInformation, image } = route.params;
  return (
    <View style={styles.container}>
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
            <Text> textInComponent </Text>
          </>
        ) : (
          <ActivityIndicator size='large'/>
        )}
      </View>
    </View>
  );
}
