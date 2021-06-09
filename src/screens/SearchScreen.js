import React ,{useState} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [myTerm,setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }

    return <View>
        <SearchBar 
            myTerm={myTerm} 
            onTermChange={(newTerm) => setTerm(newTerm)}  //buraya sadece onTermChange = {setTerm} yapabilirdik
            onTermSubmit={() => searchApi(myTerm)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>We have found {results.length} results</Text>
        <ResultsList results={filterResultsByPrice('$')} title='Cost Effective'/>
        <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier'/>
        <ResultsList results={filterResultsByPrice('$$$$')} title='Big Spender'/>
    </View>
}

const styles = StyleSheet.create({})

export default SearchScreen