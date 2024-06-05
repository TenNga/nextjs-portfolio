'use client'
import { useState } from "react";

function SearchForm() {
    const [input, setInput] = useState("");
    const handleInputSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Event: ",e);
    }

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setInput(inputValue);
    }
    return(
        <form onSubmit={handleInputSubmit}>
            <input type="text" onChange={handleInputChange} value={input}/>
            <button type="submit">Search</button>
        </form>
    )
};

export default SearchForm;