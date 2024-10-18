import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { TutorType } from "@repo/lib/types/tutor.types";
import UserAttribute from "./attribute";
import { StarIcon } from "./icons/star";
import { CheckIcon } from "./icons/check";


export function Tutor({ tutor, children }: { tutor: TutorType; children?: React.ReactNode }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
          {children}
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.attributesContainer}>
          {tutor.isVerified && (
            <UserAttribute
              value="isVerified"
              label="Verified"
              asFilter={false}
              icon={<CheckIcon width={16} height={16} />}
            />
          )}

          <UserAttribute
            label={tutor.rating}
            value="true"
            asFilter={false}
            icon={<StarIcon fill="#FFA800" width={16} height={16} />}
          />
        </View>

        <Text style={styles.name}>{tutor.name}</Text>

        <Text style={styles.bio}>{tutor.bio}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 16,
  },
  imageContainer: {
    borderWidth: 4,
    borderColor: "#F6F6F6",
    overflow: "hidden",
    borderRadius: 12,
    ...(Platform.OS !== "web" && {
      height: 230,
    }),
    ...(Platform.OS === "web" && {
      aspectRatio: 230 / 245,
      maxHeight: 256,
    }),
  },
  detailsContainer: {
    flexDirection: "column",
  },
  attributesContainer: {
    flexDirection: "row",
    marginBottom: 4,
  },
  name: {
    fontWeight: "800",
    marginTop: 3,
    fontFamily: "WixMadeforDisplay-ExtraBold",
  },
  bio: {
    fontFamily: "IBMPlexSans-Light",
    fontWeight: "300",
    fontSize: 12,
    lineHeight: 18,
  },
});
