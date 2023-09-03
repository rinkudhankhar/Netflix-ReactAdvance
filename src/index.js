import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Card from './Card';
import "./index.css";
import Sdata from './Sdata';
import Navbar from './Navbar/Navbar';
import HeroImage from './HeroImage/HeroImage';

const root = ReactDOM.createRoot(document.getElementById('root'));
function ncard(val) {
  return (
    console.log(val),
    <Card {...val} />
  )
}

root.render(
  <>
    <Navbar />
    <HeroImage imgsrc={Sdata[1].imgsrc}
    link={Sdata[1].link}/>
    <h1 className='heading_style'>List of Top 5 Netflix web Series</h1>
    <div className="card-container"> {Sdata.map(ncard)}</div>
    <h2 className='heading_style'> Trending Now </h2>
    <div className="card-container">{Sdata.map(ncard)}</div>
  </>
);

reportWebVitals();


