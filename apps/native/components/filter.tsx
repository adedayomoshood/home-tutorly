import { filterOptions } from "@repo/lib/data/filter-options";
import { useAppContext } from "@repo/lib/hooks/useAppContext";
import { Pressable, Text, View } from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";
import { CheckIcon } from "../assets/app-icons/check";
import { StarIcon } from "../assets/app-icons/star";

export default function Filter() {
  const { isOpenFilter, activeFilters, toggleFilter, removeFilter } =
    useAppContext();

  return (
    <Animated.View
      layout={LinearTransition}
      className={`overflow-hidden ${isOpenFilter ? "h-auto opacity-100 pb-3" : "opacity-0 h-0"}`}
    >
      <View className="bg-white rounded-xl p-6">
        <Text className="font-wix-extrabold text-base pb-6">Filter</Text>

        <View className="flex-row flex-wrap">
          {filterOptions.map((option) => (
            <Pressable
              accessibilityRole="button"
              key={option.id}
              aria-label={`filter by ${option.label}`}
              onPress={() => toggleFilter(option.id)}
              className={`flex-row items-center mr-2 mb-2 px-3 py-1.5 rounded-full ${
                activeFilters.includes(option.id) ? "bg-black" : "bg-gray-100"
              }`}
            >
              <Text
                numberOfLines={1}
                className={`font-wix-bold text-xs leading-4 ${
                  activeFilters.includes(option.id) ? " text-white" : ""
                }`}
              >
                {option.label}
              </Text>

              {option.id === "verified" && (
                <CheckIcon
                  width={16}
                  height={16}
                  className={`ml-1 ${
                    activeFilters.includes(option.id)
                      ? "text-green-400"
                      : "text-green-500"
                  }`}
                />
              )}

              {option.id === "fiveStars" && (
                <StarIcon
                  width={16}
                  height={16}
                  className={`ml-1 ${
                    activeFilters.includes(option.id)
                      ? "text-yellow-400"
                      : "text-yellow-500"
                  }`}
                />
              )}
            </Pressable>
          ))}
        </View>
      </View>
    </Animated.View>
  );
}
