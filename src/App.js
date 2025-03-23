import React, { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/data.json")  // Fetches the JSON file from the "public" folder
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error("Error loading JSON:", error));
    }, []);

    return (
        <div>
            <h1>GrizzHacks Data</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.name} - {item.value}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;

