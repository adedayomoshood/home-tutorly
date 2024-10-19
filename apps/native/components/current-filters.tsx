import { useAppContext } from "@repo/lib/hooks/useAppContext";
import { Pressable, Text, View } from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";
import { filterOptions } from "@repo/lib/data/filter-options";
import { StarIcon } from "../assets/app-icons/star";
import { CheckIcon } from "../assets/app-icons/check";
import { CloseIcon } from "../assets/app-icons/close";

export default function CurrentFilters() {
  const { activeFilters, removeFilter } = useAppContext();

  return (
    <Animated.View layout={LinearTransition} className="pb-1.5 flex-row flex-wrap">
      {activeFilters.map((filterId) => {
        const filter = filterOptions.find((option) => option.id === filterId);
        if (!filter) return null;
        return (
          <View
            key={filterId}
            className="flex-row group mb-1.5 mr-1.5 leading-4 flex bg-white items-center font-bold px-3.5 pr-2 py-0.5 rounded-full text-xs border border-transparent hover:border-gray-200 transition-all"
          >
            <Text className="text-xs font-wix-bold">
              {filter.label.toString()}
            </Text>

            {filterId === "verified" && (
              <CheckIcon
                width={16}
                height={16}
                className={`ml-1 text-green-500`}
              />
            )}

            {filterId === "fiveStars" && (
              <StarIcon
                width={16}
                height={16}
                className={`ml-1 text-yellow-500`}
              />
            )}

            <Pressable
              onPress={() => removeFilter(filterId)}
              className="ml-0.5 group"
            >
              <CloseIcon width={16} height={16} strokeWidth={2} className="text-gray-400" />
            </Pressable>
          </View>
        );
      })}
    </Animated.View>
  );
}
