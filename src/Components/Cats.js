import { useEffect, useState } from "react";
import { useAsync } from "../CustomHooks/hooks"

export function Cats() {
    const [selectedBreed, setSelectedBreed] = useState(0);
    const [breeds] = useAsync('https://api.thecatapi.com/v1/breeds', false);
    const [images] = useAsync(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breeds.length ? breeds[selectedBreed].id : 'abys'}&api_key=live_x26Wyq9sfpYG7tWNh3fxFldC4cwVxnuIzo5c8iYsRNYSZiPjlz1VQUEGpDnpI9TO`, true, selectedBreed)
    
 


    return (
        <div>
            <select onChange={e => setSelectedBreed(e.target.value)}>
                { breeds.length !== 0 && breeds.map((catObj, index) => <option key={catObj.id} value={index}>{catObj.name}</option>) }
            </select>
            <div>
                { breeds.length !== 0 && breeds[selectedBreed].description }
            </div>
             <div>
                { images.length !== 0 && images.map((imgObj, index) => <img key={`img${index}`}s src={imgObj.url} />) }
             </div>
        </div>
    )
}