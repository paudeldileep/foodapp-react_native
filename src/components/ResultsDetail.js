import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'

const ResultsDetail = ({result}) => {
    return (
        <View style={styles.mainview}>
            <Image style={styles.image} source={{uri:result.image_url}}/>
            <Text style={styles.title}>{result.name}</Text>
            <Text style={styles.desc}>{result.rating} Stars ,{result.review_count} Reviews</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    mainview:{
        marginLeft:15
    },
    image:{
        height:150,
        width:250,
        borderRadius:5,
      
    },
    title:{
        fontSize:16,
        fontWeight:'700',
        paddingVertical:5,
        paddingLeft:5
    },
    desc:{
        paddingLeft:5,
    }
})

export default ResultsDetail
