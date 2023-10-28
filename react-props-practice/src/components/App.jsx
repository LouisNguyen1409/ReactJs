import React from "react";
import Card from "./Card";
import "../index.css";
import contacts from "../contacts.js";

function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            {contacts.map((element) => (
                <Card name={element.name} img={element.imgURL} phone={element.phone} email={element.email} />
            ))}
        </div>
    );
}

export default App;
