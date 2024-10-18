import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import TabBarButton from "./button";

const expoRoutes = ["_sitemap", "+not-found"];

export default function TabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          if (expoRoutes.includes(route.name)) return null;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TabBarButton
              label={label as ReactNode}
              key={route.name}
              onPress={onPress}
              isFocused={isFocused}
              routeName={route.name}
              onLongPress={onLongPress}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    flex: 1,
    bottom: 0,
    paddingBottom: 24,
    paddingHorizontal: 20,
  },
  tabBar: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#ffffff",
    height: 80,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "space-between",
  },
});
