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
    <View className="absolute w-full bottom-0 pb-6 px-5">
      <View className="flex-row p-4 bg-white h-20 rounded-3xl shadow-xl justify-stretch">
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
