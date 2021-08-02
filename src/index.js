import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import AverageRating from './AverageRating';
import Reviews from './Reviews';
import Sentiment from './Sentiment';
import Sidebar from './Sidebar';
import Visitors from './Visitors'
import reportWebVitals from './reportWebVitals';
const data = {
  numReviews: 1281,
  numVisitors: 821,
  avgRating: 4.6,
  sentimentAnalysis: [960, 122, 321],
  sidebarItems: [
    "Dashboard",
    "Widget",
    "Reviews",
    "Customers",
    "Online Analysis",
    "Settings"
  ]
}
ReactDOM.render(
  <React.StrictMode>
    <div class="whole">
      <div class="left">
        <Sidebar sidebarItems={data.sidebarItems}/>
      </div>
      <div class="right">
        <div class="top-right">
          <Reviews numReviews={data.numReviews}/>
          <AverageRating avgRating={data.avgRating}/>
          <Sentiment sentimentAnalysis={data.sentimentAnalysis}/>
        </div>
        <div class="bottom-right">
          <Visitors numVisitors={data.numVisitors}/>  
        </div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();