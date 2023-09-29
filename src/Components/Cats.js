import {  useState } from "react";
import { useAsync } from "../CustomHooks/hooks"
import { Header } from "./Header";
import { Search } from "./Search";
import { Breed } from "./Breed";

export function Cats() {
    const [searchedBreed, setSearchedBreed] = useState(['Abyssinian', 0]);
    const [breeds] = useAsync('https://api.thecatapi.com/v1/breeds', false);

    return (
        <div>
            <Header/>
            <Search breeds={breeds} setSearchedBreed={setSearchedBreed} />
            <Breed breeds={breeds} searchedBreed={searchedBreed} />
        </div>
    )
}