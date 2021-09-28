import React, { ReactElement } from "react";

import { Text, View, Image } from "react-native";

export default function Itemscreen({ route }: any): ReactElement {
  console.log(route.params.itemInformation.item);
  const { itemInformation, image } = route.params;
  return (
    <View>
      <Image source={{ uri: image }} />
      <Text> textInComponent </Text>
    </View>
  );
}
