import React, { useState } from "react"
import { View, Text, ScrollView, StyleSheet } from "react-native"

import ResultsList from "../components/ResultsList"
import SearchBar from "../components/SearchBar"
import useResults from "../hooks/useResults"

const SearchScreen = () => {
  const [term, setterm] = useState("")
  const [fetchResult, errmsg, results] = useResults()

  const filterResults = (price) => {
    return results.filter((result) => {
      return result.price === price
    })
  }

  return (
    <View style={styles.mainview}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setterm(newTerm)}
        onTermSubmit={() => fetchResult(term)}
      />

      {errmsg ? <Text style={styles.infotext}>Error:{errmsg}</Text> : null}
      {results.length > 0 ? (
        <Text style={styles.infotext}>Found {results.length} results</Text>
      ) : (
        <Text style={styles.infotext}>Please search something</Text>
      )}
      <ScrollView>
        <ResultsList title='Economic' results={filterResults("$")} />
        <ResultsList title='Middle class' results={filterResults("$$")} />
        <ResultsList title='Hi Fi' results={filterResults("$$$")} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  mainview: {
    height: "100%",
    paddingBottom: 20,
    backgroundColor: "rgba(54,185,211,100)",
  },
  infotext: {
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
})

export default SearchScreen
