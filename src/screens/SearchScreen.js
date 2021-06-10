import React ,{useState} from 'react'
import {View,Text,StyleSheet , ScrollView} from 'react-native'
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
    //bununla view olmadan da birkac seyi tutabiliyoruz <View style = {{flex: 1}}> yazsaydik da olurdu ama view bazi durumlarda kisitlayabiliyor
    return <>                              
        <SearchBar 
            myTerm={myTerm} 
            onTermChange={(newTerm) => setTerm(newTerm)}  //buraya sadece onTermChange = {setTerm} yapabilirdik
            onTermSubmit={() => searchApi(myTerm)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView showsVerticalScrollIndicator={false}>
            <ResultsList results={filterResultsByPrice('$')} title = 'Cheap' />
            <ResultsList results={filterResultsByPrice('$$')} title ='Bit Pricier' />
            <ResultsList results={filterResultsByPrice('$$$$')} title ='Expensive' />
        </ScrollView>
    </> 
}

const styles = StyleSheet.create({})

export default SearchScreen
