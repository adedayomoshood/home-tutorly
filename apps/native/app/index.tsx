import { tutors } from "@repo/lib/data/tutors";
import { useAppContext } from "@repo/lib/hooks/useAppContext";
import { useFilteredTutors } from "@repo/lib/hooks/useFilteredTutors";
import { Tutor } from "@repo/ui";
import { Image } from "expo-image";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import TopBar from "../components/top-bar";
import CurrentFilters from "../components/current-filters";
import Filter from "../components/filter";
import Animated, { LinearTransition } from "react-native-reanimated";

export default function AppHomeScreen() {
  const { activeFilters, searchTerm } = useAppContext();

  const filteredTutors = useFilteredTutors(tutors, {
    activeFilters,
    searchTerm,
  });

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView className="pb-32 px-5">
        <TopBar />

        <CurrentFilters />

        <Filter />

        <Animated.View
          layout={LinearTransition}
          className="p-4 bg-white rounded-xl mb-24"
        >
          {filteredTutors.map((tutor) => (
            <View key={tutor.id} className="mb-4">
              <Tutor tutor={tutor}>
                <Image
                  source={{ uri: tutor.avatarUrl }}
                  className="w-full h-full bg-gray-100"
                  contentFit="cover"
                  contentPosition="center"
                />
              </Tutor>
            </View>
          ))}

          {filteredTutors.length === 0 && (
            <View className="p-3 bg-red-100 rounded-lg">
              <Text className="text-red-600">No tutors found</Text>
            </View>
          )}
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}
