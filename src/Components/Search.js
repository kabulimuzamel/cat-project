import { useState } from "react";
import { useAutoCompleteSearchResults } from "../CustomHooks/hooks";
import { searchHander } from "../Functions/functions";

export function Search({ breeds, setSearchedBreed }) {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('Abyssinian');
    const [searchedResults] = useAutoCompleteSearchResults(breeds, input)

    return (
        <div id="search">
            <h3>Search for the Breed you want to know about</h3>
            <h4>Result for <span id="result">{result}</span></h4>
            <form>
                <input id="search-input" value={input} placeholder="Search here..." onChange={e => setInput(e.target.value)} />
            </form>
            <ul id="search-results">
                { searchedResults.length !== 0 && searchedResults.map(breedName => <li key={breedName} className="breedName" onClick={(e) => searchHander(e, breedName, setSearchedBreed, setResult)}>{breedName[0]}</li>) }
            </ul> 
        </div>
    )
}