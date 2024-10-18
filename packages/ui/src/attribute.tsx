import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface UserAttributeProps {
  label: React.ReactNode;
  value: string;
  icon?: React.ReactNode;
  asFilter: boolean;
}

export default function UserAttribute({
  label,
  value,
  icon,
}: UserAttributeProps) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.label]}>{label}</Text>
      
      {/* <Text style={[styles.value]}>{value}</Text> */}
      
      {icon && icon}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
    backgroundColor: "#F6F6F6",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 9999,
  },
  label: {
    fontSize: 12,
    marginRight: 4,
    fontWeight: "700",
    fontFamily: "WixMadeforDisplay-Bold",
  },
});
