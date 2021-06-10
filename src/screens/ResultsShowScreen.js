import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const ResultsShowScreen = ({navigation}) => {
    const id = navigation.getParam('id')       //navigation ile parametreleri alma
    return <View>
        <Text>resultsssss</Text>
    </View>
}

const styles = StyleSheet.create({

})

export default ResultsShowScreen
