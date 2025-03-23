import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState(null);

  const handleClick = async () => {
    try {
      const response = await fetch("/data.json");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Click the Fishbowl</h1>
      <img
        src="/fishbowl.jpg"
        alt="Fishbowl"
        onClick={handleClick}
        style={{ width: "300px", cursor: "pointer" }}
      />
      {data && (
        <div style={{ marginTop: "20px", border: "1px solid black", padding: "10px" }}>
          <h2>Database Info:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;


export default App;

