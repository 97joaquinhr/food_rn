import React,{useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () =>{
    const [results,setResults] = useState([]);
    const [errorMessage,setErrorMessage] = useState('');

    const searchApi= async searchTerm=>{
        try{
            const response = await yelp.get('/search',{
                params:{
                    term: searchTerm,
                    limit:50,
                    location: 'Santiago de Queretaro',
    
                }
            });
            setResults(response.data.businesses);
        }catch(err){
            setErrorMessage('Something went wrong');
        }
        
    };
    /* Updated state causes component to rerender */
    useEffect(()=>{
        searchApi('pasta');
    },[]);
    // respetar orden
    return [searchApi,results,errorMessage];
};