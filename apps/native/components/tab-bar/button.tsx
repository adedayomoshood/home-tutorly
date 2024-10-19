import React, { ReactNode } from "react";
import { Pressable, PressableProps, Text, View } from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";
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
    <Animated.View
      layout={LinearTransition}
      className={`rounded-lg ${isFocused ? "bg-gray-100 text-gray-900 flex-grow-0" : "flex-1"}`}
    >
      <Pressable
        className="flex-1 px-4"
        onLongPress={onLongPress}
        onPress={onPress}
      >
        <Animated.View
          layout={LinearTransition}
          className={`flex-1 flex-row items-center overflow-hidden justify-center`}
        >
          <View>
            {icons[routeName as IconKeys]({
              isActive: isFocused,
            })}
          </View>

          <Text
            className={`text-xs font-wix-bold font-bold ml-2 ${isFocused ? "auto" : "w-0"}`}
          >
            {typeof label === "string" ? label : String(label)}
          </Text>
        </Animated.View>
      </Pressable>
    </Animated.View>
  );
}
