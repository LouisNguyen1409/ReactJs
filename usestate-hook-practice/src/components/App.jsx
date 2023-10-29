import React from "react";

function App() {
    const [time, setTime] = React.useState(new Date().toLocaleTimeString());
    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return (
        <div className="container">
            <h1>{time}</h1>
            <button onClick={() => setTime(new Date().toLocaleTimeString())}>Get Time</button>
        </div>
    );
}

export default App;
