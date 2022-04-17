import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { NewsContext } from "../API/Context";
import Carousel from "react-native-snap-carousel";

const NewsScreen = () => {
  const {
    news: { article },
  } = useContext(NewsContext);

  const [activeIndex, setActiveIndex] = useState();

  const windowHeight = Dimensions.get("window").height;

  return (
    <View style={styles.carousel}>
      {article && (
        <Carousel
          layout={"stack"}
          data={article.slice(0, 10)}
          sliderHeight={300}
          itemHeight={windowHeight}
          vertical={true}
          //   renderItem={}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      )}
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({});
