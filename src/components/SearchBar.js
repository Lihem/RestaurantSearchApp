import React from 'react'
import {View,TextInput,StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange,onTermSubmit}) => {
    return <View style={styles.backgroundStyle}>
        <Feather name="search" style = {styles.iconStyle} />
        <TextInput 
            onEndEditing={() => onTermSubmit()} //bunun yerine onEndEditing={onTermSubmit} yapabilirdik aynisi onChangeText icin de gecerli 
            autoCapitalize ="none"
            autoCorrect = {false}
            style = {styles.inputStyle}
            placeholder = 'Search'
            value = {term}
            onChangeText = {new1Term => onTermChange(new1Term)}
        />
    </View>
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop:10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        
    },
    inputStyle:{
        flex: 1,
        fontSize: 18,
    },
    iconStyle:{
        fontSize: 35,
        color:'black',
        alignSelf: 'center',
        marginHorizontal: 10
    }
})

export default SearchBar