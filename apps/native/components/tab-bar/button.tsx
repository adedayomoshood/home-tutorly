import React, { ReactNode } from "react";
import {
  Pressable,
  PressableProps,
  Text,
  View,
  StyleSheet,
} from "react-native";
import HomeIcon from "./icons/home";
import MoreIcon from "./icons/more";
import RateIcon from "./icons/rate";
import TransactionsIcon from "./icons/transactions";

type IconKeys = "index" | "more" | "rate" | "transactions";

const icons: Record<
  IconKeys,
  ({ isActive }: { isActive: boolean }) => JSX.Element
> = {
  index: (props) => <HomeIcon {...props} />,
  more: (props) => <MoreIcon {...props} />,
  rate: (props) => <RateIcon {...props} />,
  transactions: (props) => <TransactionsIcon {...props} />,
};

export type TabBarButtonProps = {
  label: ReactNode;
  isFocused: boolean;
  routeName: string;
} & PressableProps;

export default function TabBarButton({
  label,
  onPress,
  isFocused,
  routeName,
  onLongPress,
}: TabBarButtonProps) {
  return (
    <Pressable
      onLongPress={onLongPress}
      onPress={onPress}
      style={[
        styles.button,
        isFocused ? styles.focusedButton : styles.defaultButton,
      ]}
    >
      <View>
        {icons[routeName as IconKeys]({
          isActive: isFocused,
        })}
      </View>

      {isFocused && (
        <Text style={styles.focusedText} numberOfLines={1}>
          {typeof label === "string" ? label : String(label)}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  focusedButton: {
    backgroundColor: "#F9F9F9",
    color: "#121212",
    flexGrow: 0,
  },
  defaultButton: {
    flex: 1,
  },
  focusedText: {
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 8,
  },
});
