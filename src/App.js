import React from "react";

function App() {
  return (
    <div>
      <h1>Click the Fishbowl!</h1>
      <img 
        src="/fishbowl.jpg" 
        alt="Fishbowl" 
        style={{ cursor: "pointer", width: "300px" }} 
        onClick={handleClick} 
      />
    </div>
  );
}

function handleClick() {
  fetch("/data.json")  // Fetching from public/data.json
    .then(response => response.json())
    .then(data => alert(JSON.stringify(data, null, 2)))
    .catch(error => console.error("Error fetching data:", error));
}

export default App;

export default App;


export default App;

