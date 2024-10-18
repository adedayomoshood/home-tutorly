import { useAppContext } from "@repo/lib/hooks/useAppContext";
import { useState } from "react";
import { View, TextInput, StyleSheet, Pressable, Keyboard } from "react-native";
import { SearchIcon } from "../../assets/app-icons/search";

export default function Search() {
  const { handleFilter, filter } = useAppContext();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    handleFilter({
      searchValue,
    });
    Keyboard.dismiss();
  };

  return (
    <>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search tutors"
          placeholderTextColor="#1f2937"
          defaultValue={filter.searchValue}
          onChangeText={(text) => setSearchValue(text)}
          onSubmitEditing={handleSearch}
          onBlur={handleSearch}
        />

        <Pressable
          accessibilityRole="button"
          onPress={handleSearch}
          style={styles.searchButton}
        >
          <SearchIcon color="#ffffff" />
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 8,
    paddingLeft: 16,
    flexDirection: "row",
    borderRadius: 12,
    alignItems: "center",
  },
  searchButton: {
    height: 32,
    color: "#ffffff",
    backgroundColor: "#E900D2",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    aspectRatio: 1,
  },
  searchInput: {
    height: 32,
    flex: 1,
  },
});
