import { useAppContext } from "@repo/lib/hooks/useAppContext";
import React from "react";
import { Pressable, Dimensions, StyleSheet, View } from "react-native";
import { FilterIcon } from "../../assets/app-icons/filter";
import Search from "./search";
import Animated, { LinearTransition } from "react-native-reanimated";

export default function TopBar() {
  const { onToggleFilter, isOpenFilter } = useAppContext();

  const isLandscape = () =>
    Dimensions.get("window").width > Dimensions.get("window").height;

  return (
    <View
      className={`flex-row pb-3 justify-between items-center ${isLandscape() ? "pt-4" : "pt-3"}`}
    >
      <Pressable
        onPress={onToggleFilter}
        accessibilityRole="button"
        className="mr-2"
      >
        <Animated.View
          layout={LinearTransition}
          className={`h-11 md:h-14 rounded-lg aspect-square items-center justify-center ${isOpenFilter ? "bg-black" : "bg-white"}`}
        >
          <FilterIcon color={isOpenFilter ? "#ffffff" : "#000000"} />
        </Animated.View>
      </Pressable>

      <Search />
    </View>
  );
}
