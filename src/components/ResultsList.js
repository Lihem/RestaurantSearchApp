import React from 'react'
import {View, Text, StyleSheet, FlatList,TouchableOpacity} from 'react-native'
import ResultsDetail from './ResultsDetail'
import { withNavigation } from 'react-navigation'

const ResultsList= ({title, results,navigation}) => {
    return <View style = {styles.viewStyle}>
        <Text style = {styles.titleStyle}>{title}</Text>
        <FlatList
            showsHorizontalScrollIndicator = {false}
            horizontal= {true}  //sadece horizontal yazsamda true olurdu o ozellik
            data = {results}
            keyExtractor = {(result) => result.id}
            renderItem={({item})=>{ //item dedigi sey 1 result flatlistteki herbiri icin item olarak erismeliyiz
                return (<TouchableOpacity onPress = {() => navigation.navigate('ResultsShow', {id: item.id} )}>
                <ResultsDetail result={item}/>
                </TouchableOpacity>)
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    },
    viewStyle:{
        marginBottom:10
    }

})

export default withNavigation(ResultsList)
