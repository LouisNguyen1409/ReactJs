// import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
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

import React from 'react';
import ReactDOM from 'react-dom';

const now = new Date('March 13, 08 12:20');
const time = now.getHours();
let greeting = "Good morning"
let colorTheme = "red"
if (time < 12) {
  greeting = "Good morning";
} else if (time < 18) {
  greeting = "Good afternoon";
  colorTheme = "green"
} else {
  greeting = "Good evening";
  colorTheme = "blue"
}

ReactDOM.render(
  <h1 className='heading' style={{color: colorTheme}}>{greeting}</h1>,
  document.getElementById('root')
);