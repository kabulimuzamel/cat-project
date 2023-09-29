
export const fetchAPI = (api, setter) => {
    fetch(api)
        .then(res => res.json())
        .then(res => setter(res))
        .catch(err => setter(err.message))
}

export const inputMatchFinder = (setter, arr, input, key) => {
    setter([]);
    const inputLowCase = input.toLowerCase();
    for (let i = 0; i < arr.length; i++) {
        const arrElementNameSliced = arr[i].name.slice(0, input.length).toLowerCase();
        if(arrElementNameSliced === inputLowCase) setter(prev => [...prev, [arr[i][key], i]]);  
    }
}

export const searchHander = (e, breedName, setSearchedBreed, setResult) => {
    e.preventDefault();
    setSearchedBreed(breedName);
    setResult(breedName[0]);
}