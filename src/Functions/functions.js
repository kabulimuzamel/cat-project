
export const fetchAPI = (api, setter) => {
    fetch(api)
        .then(res => res.json())
        .then(res => setter(res))
        .catch(err => setter(err.message))
}

export const inputMatchFinder = (setter, arr, input, key) => {
    setter([]);
    for (let i = 0; i < arr.length; i++) {
        const arrElementNameSliced = arr[i].name.slice(0, input.length).toLowerCase();
        const inputLowCase = input.toLowerCase();
        if(arrElementNameSliced === inputLowCase) setter(prev => [...prev, [arr[i][key], i]]);  
    }
}