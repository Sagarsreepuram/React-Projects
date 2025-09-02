import React, { useEffect, useState } from 'react';

const InputApi = () => {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        if (query.length < 2) {
            setSuggestions([]); // clear list if less than 2 chars
            return;
        }

        setLoading(true);
        fetch(`https://api.datamuse.com/sug?s=${query}`)
            .then((res) => res.json())
            .then((data) => {
                setSuggestions(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [query]);

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type Something...."
            />

            {loading && <p>Loading....</p>}

            <ul>
                {suggestions.map((item, index) => (
                    <li key={index}>{item.word}</li>
                ))}
            </ul>
        </div>
    );
};

export default InputApi;
