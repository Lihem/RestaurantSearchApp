import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const ResultsDetail= ({result}) => {
    return <View style={styles.viewStyle}>
        <Image 
            style={styles.imageStyle}
            source = {{uri: result.image_url}}
        />
        <Text style = {styles.nameStyle}>{result.name}</Text>
        <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
}

const styles = StyleSheet.create({
    imageStyle:{
        width:250,
        height:120,
        borderRadius:4, //koseleri yuvarlaklastirma
        marginBottom:5,
    },
    nameStyle:{
        fontWeight:'bold',
    },
    viewStyle:{
        marginLeft:15,
    }

})

export default ResultsDetail
