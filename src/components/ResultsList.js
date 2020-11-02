import { useNavigation } from "@react-navigation/native"
import React from "react"
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native"


import ResultsDetail from "./ResultsDetail"

const ResultsList = ({ title, results }) => {
  
  const navigation=useNavigation()
  return (
    <View>
      {results.length > 0 ? (
        <View style={styles.mainview}>
          <Text style={styles.title}>{title}</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Details",{id:item.id})}
                >
                  <ResultsDetail result={item} />
                </TouchableOpacity>
              )
            }}
          />
        </View>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    fontSize: 25,
    marginLeft: 15,
  },
  mainview: {
    marginBottom: 10,
  },
})

export default ResultsList
