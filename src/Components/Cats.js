import { useEffect, useState } from "react";
import { useAsync, useAutoCompleteSearchResults } from "../CustomHooks/hooks"

export function Cats() {
    const [searchedBreed, setSearchedBreed] = useState(['Abyssinian', 0]);
    const [input, setInput] = useState('')
    const [breeds] = useAsync('https://api.thecatapi.com/v1/breeds', false);
    const [images] = useAsync(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breeds.length ? breeds[searchedBreed[1]].id : 'abys'}&api_key=live_x26Wyq9sfpYG7tWNh3fxFldC4cwVxnuIzo5c8iYsRNYSZiPjlz1VQUEGpDnpI9TO`, true, searchedBreed)
    const [searchedResults] = useAutoCompleteSearchResults(breeds, input)
    
    return (
        <div>
            <div>
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} />
                </form>
                <ul>
                    { searchedResults.length !== 0 && searchedResults.map(breedName => <li key={breedName} style={{textDecoration: 'underline'}} onClick={() => setSearchedBreed(breedName)}>{breedName[0]}</li>) }
                </ul> 
            </div>
            <div>
                <h2>{breeds.length !== 0 && breeds[searchedBreed[1]].name}</h2>
                { breeds.length !== 0 && breeds[searchedBreed[1]].description }
            </div>
             <div>
                { images.length !== 0 && images.map((imgObj, index) => <img key={`img${index}`} src={imgObj.url} />) }
             </div>
        </div>
    )
}