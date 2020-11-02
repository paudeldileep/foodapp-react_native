import React from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"
import { FontAwesome } from "@expo/vector-icons"

const SearchBar = ({ term, onTermChange,onTermSubmit }) => {
  return (
    <View style={styles.mainview}>
      <FontAwesome style={styles.icon} name='search' size={30} />
      <TextInput
        style={styles.searchinput}
        autoCapitalize="none"
        placeholder='Search'
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchinput: {
    borderBottomWidth: 2,
    borderBottomColor: "grey",
    flex: 1,
    
  },
  mainview: {
    padding: 5,
    backgroundColor: "#F0EEEE",
    borderRadius: 7,
    marginHorizontal: 15,
    height: 50,
    flexDirection: "row",
    marginTop: 20,
  },
  icon: {
    alignSelf: "center",
    paddingRight:10
  },
})

export default SearchBar
