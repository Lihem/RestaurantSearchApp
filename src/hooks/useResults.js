import {useEffect, useState} from 'react'
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        try{
            const response = await yelp.get('/search',{
                params: {
                    limit: 50,
                    term: searchTerm, //ilk term yelpten gelen term istegi ikinci term bizim olusturdugumuz state olan term
                    location: 'san jose'
                }
            })
            setResults(response.data.businesses)
            setErrorMessage('')
        }catch(err){
            setErrorMessage('Something went wrong')
        }
    }

    useEffect(() => {
        searchApi('desert')
    }, [])

    return [searchApi, results , errorMessage]
}