import { useState, useEffect } from "react";
import { inputMatchFinder, fetchAPI } from "../Functions/functions";


export const useAsync = (api, fetchAgain, dependecies) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        if(!data.length || fetchAgain) fetchAPI(api, setData);
    }, [dependecies])
    return [data];
}

export const useAutoCompleteSearchResults = (breeds, input) => {
    const [searchedResults, setSearchResults] = useState([]);
    useEffect(() => {
        if(breeds.length) inputMatchFinder(setSearchResults, breeds, input, 'name')
    } ,[breeds, input]);
    return [searchedResults]
}