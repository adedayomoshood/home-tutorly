import { tutors } from "@repo/lib/data/tutors";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import TopBar from "../components/top-bar";
import { Tutor } from "@repo/ui";
import { Image } from "expo-image";
import { useState } from "react";
import { useAppContext } from "@repo/lib/hooks/useAppContext";
import { useFilteredTutors } from "@repo/lib/hooks/useFilteredTutors";

export default function AppHomeScreen() {

  const { isOpenFilter, filter } = useAppContext();

  const filteredTutors = useFilteredTutors(tutors, filter);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView style={styles.scrollView}>
        <TopBar />

        {filter && (
          <View>
            <Text>Filter</Text>
          </View>
        )}

        <View style={styles.tutorWrapper}>
          {filteredTutors.map((tutor) => (
            <View key={tutor.id} style={styles.tutor}>
              <Tutor tutor={tutor}>
                <Image
                  source={{ uri: tutor.avatarUrl }}
                  style={styles.tutorImage}
                  contentFit="cover"
                  contentPosition="center"
                />
              </Tutor>
            </View>
          ))}

          {filteredTutors.length === 0 && (
            <View>
              <Text style={styles.errorMessage}>No tutors found</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "#F6F6F6",
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingBottom: 128,
  },
  tutorWrapper: {
    padding: 16,
    marginBottom: 96,
    borderRadius: 16,
    backgroundColor: "#fff",
  },
  tutor: {
    marginBottom: 20,
  },
  tutorImage: {
    height: "100%",
    width: "100%",
  },
  errorMessage: {
    textAlign: "center",
    fontSize: 16,
    padding: 8,
    backgroundColor: "#FFB4B4",
    marginBottom: 200,
  },
  filterWrapper: {
    backgroundColor: "#ffffff",

  }
  
});
