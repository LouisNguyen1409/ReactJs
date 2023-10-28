// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.img} alt="avatar_img" />
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </div>
    );
}

ReactDOM.render(
    <div>
        <h1>My Contacts</h1>
        <Card name="Beyonce" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" phone="+123 456 789" email="b@beyonce.com" />

        <Card name="Jack Bauer" img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" phone="+987 654 321" email="jack@nowhere.com" />

        <Card name="Chuck Norris" img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" phone="+918 372 574" email="gmail@chucknorris.com" />
    </div>,
    document.getElementById("root")
);
