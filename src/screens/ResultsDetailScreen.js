import React, { useEffect,useState } from 'react'
import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import yelp from '../api/yelp'

const ResultsDetailScreen = ({route}) => {
    const id=route.params.id;
    const[result,setresult]=useState(null)

    const getResult=async(id)=>{
        const res=await yelp.get(`/${id}`);
        setresult(res.data)
    };

    useEffect(()=>{
        getResult(id)
    },[])

    return (
        <View style={styles.mainview}>
            <Text style={styles.title}>{result && result.name}</Text>
            {result && 
            <FlatList
            data={result.photos}
            keyExtractor={photo=>photo}
            renderItem={({item})=>{
                return <Image style={styles.image} source={{uri:item}} />
            }}
            />
        }
        </View>
    )
}

const styles=StyleSheet.create({
    image:{
        height:200,
        width:'100%',
        margin:2,
        borderRadius:7

    },
    title:{
        fontSize:18,
        fontWeight:'700',
        marginVertical:10
    },
    mainview:{
        paddingHorizontal:10,
        backgroundColor:'rgba(54,185,211,100)',
        height:'100%'
    }

})

export default ResultsDetailScreen
