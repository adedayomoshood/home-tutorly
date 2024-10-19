import { useAppContext } from "@repo/lib/hooks/useAppContext";
import { useDebounce } from "@repo/lib/hooks/useDebounce";
import { useDisclosure } from "@repo/lib/hooks/useDisclosure";
import { useEffect, useState } from "react";
import { Keyboard, Pressable, TextInput, View } from "react-native";
import { SearchIcon } from "../../assets/app-icons/search";

export default function Search() {
  const { searchTerm, setSearchTerm } = useAppContext();
  const [formValue, setFormValue] = useState("");
  const debouncedFormValue = useDebounce<string>(formValue, 300);
  const {
    isOpen: isOpenFocus,
    onOpen: onOpenFocus,
    onClose: onCloseFocus,
  } = useDisclosure();

  const handleSearch = () => {
    setSearchTerm(formValue);
    Keyboard.dismiss();
  };

  useEffect(() => {
    setSearchTerm(debouncedFormValue);
  }, [debouncedFormValue, setSearchTerm]);

  return (
    <>
      <View
        className={`flex-row border border-transparent flex-1 p-2 md:p-2.5 pl-4 md:pl-8 bg-white rounded-lg md:rounded-xl ${
          isOpenFocus && "border-primary-500"
        }`}
      >
        <TextInput
          placeholder="Search tutors"
          placeholderTextColor="#1f2937"
          onFocus={onOpenFocus}
          autoFocus={false}
          defaultValue={searchTerm}
          onChangeText={(text) => setFormValue(text)}
          onSubmitEditing={handleSearch}
          onBlur={() => {
            handleSearch();
            onCloseFocus();
          }}
          className="flex-1 mr-2 bg-transparent h-8 md:h-9 outline-none placeholder:text-gray-900"
        />

        <Pressable
          accessibilityRole="button"
          onPress={handleSearch}
          className="bg-primary-500 text-white h-8 md:h-9 aspect-square flex items-center justify-center rounded-lg"
        >
          <SearchIcon className="text-white w-6 h-6" />
        </Pressable>
      </View>
    </>
  );
}
