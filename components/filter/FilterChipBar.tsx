import { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Chip } from "react-native-paper";

export default function FilterChipBar() {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filterList = [
    {
      name: "Today",
      icon: "calendar-today"
    },
    {
      name: "Pop",
      icon: "party-popper"
    },
    {
      name: "Rock",
      icon: "rocket-outline"
    },
    {
      name: "Nearby",
      icon: "map-marker-circle"
    },
    {
      name: "More",
      icon: "tune",
      isModal: true
    }
  ];

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
    <ScrollView horizontal style={styles.scroll}>
      <View style={styles.container}>
        {filterList.map((item) => (
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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    paddingVertical: 5
  },
  scroll: {
    flexWrap: "wrap"
  },
  selectedChip: {
    opacity: 0.6
  }
});
