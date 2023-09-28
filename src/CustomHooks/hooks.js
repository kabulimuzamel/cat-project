import { useState, useEffect } from "react";
 
const fetchAPI = (api, setter) => {
    fetch(api)
        .then(res => res.json())
        .then(res => setter(res))
        .catch(err => setter(err.message))
}

export const useAsync = (api, fetchAgain, dependecies) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        if(!data.length || fetchAgain) fetchAPI(api, setData);
    }, [dependecies])
    return [data];
}