import { AppProvider } from "@repo/lib/hooks/useAppContext";
import { useFonts } from "expo-font";
import { SplashScreen, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import TabBar from "../components/tab-bar";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "WixMadeforDisplay-Regular": require("../assets/fonts/WixMadeforDisplay-Regular.ttf"),
    "WixMadeforDisplay-Medium": require("../assets/fonts/WixMadeforDisplay-Medium.ttf"),
    "WixMadeforDisplay-Bold": require("../assets/fonts/WixMadeforDisplay-Bold.ttf"),
    "WixMadeforDisplay-ExtraBold": require("../assets/fonts/WixMadeforDisplay-ExtraBold.ttf"),
    "IBMPlexSans-Light": require("../assets/fonts/IBMPlexSans-Light.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <AppProvider>
      <View style={styles.container}>
        <Tabs tabBar={(props) => <TabBar {...props} />}>
          <Tabs.Screen
            name="index"
            options={{ title: "Home", headerShown: false }}
          />

          <Tabs.Screen
            name="rate"
            options={{ title: "Rate", headerShown: false }}
          />

          <Tabs.Screen
            name="transactions"
            options={{ title: "Transactions", headerShown: false }}
          />

          <Tabs.Screen
            name="more"
            options={{ title: "More", headerShown: false }}
          />
        </Tabs>

        <StatusBar style="dark" />
      </View>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
  },
});