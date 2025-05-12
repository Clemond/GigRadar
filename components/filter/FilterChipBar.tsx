import { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Chip } from "react-native-paper";
import { listOfFilterChips } from "../../constants/listOfFilterChips";
import FilterModal from "../modals/FilterModal";

interface FilterChipBarProps {
  selectedFilters: string[];
  setSelectedFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function FilterChipBar({
  selectedFilters,
  setSelectedFilters
}: FilterChipBarProps) {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  function hideModal() {
    setIsShowModal(false);
  }

  const handleChipPress = (filterName: string, isModal?: boolean) => {
    if (isModal) {
      setIsShowModal(true);
      return;
    }

    setSelectedFilters((prev) =>
      prev.includes(filterName)
        ? prev.filter((name) => name !== filterName)
        : [...prev, filterName]
    );
  };

  return (
    <View>
      <View style={styles.container}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {listOfFilterChips.map((item) => (
            <Chip
              key={item.name}
              icon={item.icon}
              mode="outlined"
              selected={selectedFilters.includes(item.name)}
              style={selectedFilters.includes(item.name) && styles.selectedChip}
              onPress={() => handleChipPress(item.name, item.isModal)}
            >
              {item.name}
            </Chip>
          ))}
        </ScrollView>
      </View>
      <FilterModal
        visible={isShowModal}
        hideModal={hideModal}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 15
  },
  scrollContent: {
    flexDirection: "row",
    gap: 10
  },
  selectedChip: {
    opacity: 0.6
  }
});
