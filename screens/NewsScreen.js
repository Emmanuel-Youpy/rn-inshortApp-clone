import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { NewsContext } from "../API/Context";
import Carousel from "react-native-snap-carousel";
import SingleNews from "../API/SingleNews";

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
          renderItem={({ item, index }) => (
            <SingleNews item={item} index={index} darkTheme={darkTheme} />
          )}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      )}
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    transform: [{ scaleY: -1 }],
    backgroundColor: "black",
  },
});
