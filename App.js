import { useState } from "react";
import { Button, I18nManager, View, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import RNRestart from "react-native-restart";

const Route1 = () => <View style={{ flex: 1, backgroundColor: "#ff4081" }} />;
const Route2 = () => <View style={{ flex: 1, backgroundColor: "#673ab7" }} />;
const Route3 = () => <View style={{ flex: 1, backgroundColor: "#173ab8" }} />;
const Route4 = () => <View style={{ flex: 1, backgroundColor: "#373ab8" }} />;
const Route5 = () => <View style={{ flex: 1, backgroundColor: "#773ab8" }} />;
const Route6 = () => <View style={{ flex: 1, backgroundColor: "#A73ab8" }} />;
const Route7 = () => <View style={{ flex: 1, backgroundColor: "#D73ab8" }} />;

const renderScene = SceneMap({
  route1: Route1,
  route2: Route2,
  route3: Route3,
  route4: Route4,
  route5: Route5,
  route6: Route6,
  route7: Route7,
});

const routes = [
  { key: "route1", title: "Route1" },
  { key: "route2", title: "Route2" },
  { key: "route3", title: "Route3" },
  { key: "route4", title: "Route4" },
  { key: "route5", title: "Route5" },
  { key: "route6", title: "Route6" },
  { key: "route7", title: "Route7" },
];

export default function TabViewExample() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  return (
    <View style={{ flex: 1, paddingTop: 50, paddingBottom: 50 }}>
      <TabView
        renderTabBar={(props) => <TabBar scrollEnabled {...props} />}
        style={{ flex: 1 }}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
      <Button
        onPress={() => {
          try {
            I18nManager.allowRTL(true);
            I18nManager.forceRTL(true);
            setTimeout(() => {
              console.log('AAA')
              RNRestart.restart();
            }, 500);
          } catch (error) {
            console.log("ERROR: ", error);
          }
        }}
        title="change language to Arabic (RTL)"
      />
    </View>
  );
}
