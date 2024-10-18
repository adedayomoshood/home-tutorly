import { useAppContext } from "@repo/lib/hooks/useAppContext";
import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Search from "./search";
import { FilterIcon } from "../../assets/app-icons/filter";

export default function TopBar() {
  const { onToggleFilter, isOpenFilter } = useAppContext();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={onToggleFilter}
        accessibilityRole="button"
        style={[styles.iconButton, isOpenFilter && styles.iconButtonActive]} // Apply conditional style
      >
        <FilterIcon color={isOpenFilter ? "#ffffff" : "#000000"} />
      </Pressable>

      <Search />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    paddingVertical: 16,
  },
  iconButton: {
    height: 48,
    aspectRatio: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  iconButtonActive: {
    backgroundColor: "black",
  },
  activeText: {
    color: "white",
  },
  inactiveText: {
    color: "black",
  },
});
