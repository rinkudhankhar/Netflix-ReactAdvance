import React, { useState, useEffect } from "react";
import "/Users/rkumari/Desktop/Netflix/netflix-clone/src/HeroImage/HeroImage.css";

function HeroImage(props) {
  const [webSeriesLink, setWebserieslink] = useState("https://www.netflix.com/watch/81699649?trackId=255824129&tctx=0%2C1%2Cfd225e57-ae4d-41aa-82c4-fc46af5109f8-238561486%2Cfd225e57-ae4d-41aa-82c4-fc46af5109f8-238561486%7C2%2Cunknown%2C%2C%2CtitlesResults%2C81699649%2CVideo%3A81699649%2CminiDpPlayButton");
  const [SeriesBackground, setSeriesBackground] = useState("https://occ-0-2483-3662.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYJGEMv3oX2hJUDxJQSAGV0mRV_U7ZuUDae2KmbXv4flVH4pxA5hTVJQnqrzDlxvjETQzEvnHRn_lQhVd97IHANRnMxKRePwW29g.webp?r=a3e");
  const webSeriesDescription = "An overworked man who often fails to focus on his loved ones is given a chance to turn his life around when he meets Titan, the god of time";

  const seriesSummary = "This is a captivating web series that will keep you on the edge of your seat.";

  const updateWebserieslink = () => {
    setWebserieslink(props.link);
  };

  const updateSeriesBackground = () => {
    setSeriesBackground(props.imgsrc);
  };

  const handleInfoButtonClick = () => {
    alert(seriesSummary);
  };
  useEffect(() => {
    // Define a function to handle loading and updating values
    const handlePageLoad = () => {
      // Update values when the page is loaded
      updateWebserieslink();
      updateSeriesBackground();
    };
    console.log('page refreshed');

    // Check if the page is already loaded
    if (document.readyState === "complete") {
      handlePageLoad(); // If the page is already loaded, update the values immediately
    } else {
      // If the page is not yet loaded, add an event listener for the window.onload event
      window.addEventListener("load", handlePageLoad);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, [props.link, props.imgsrc]);
  return (
    <div className="hero-image-wrapper">
      <img className="hero static-image image-layer" src={SeriesBackground} alt="" />
      <div>
        <h1 className="Bros">BROS</h1>
        <h2 className="series-title">Exciting Web Series</h2>
        <p className="series-description text-overlay">{webSeriesDescription}</p>
      </div>
      <div className="trailer-vignette vignette-layer"></div>
      <div className="hero-vignette vignette-layer"></div>
      <div className="embedded-components button-layer">
        <a href={webSeriesLink} target="_blank">
          <button className="play-button">Play</button>
        </a>
        <button className="info-button" onClick={handleInfoButtonClick}>Info !</button>

      </div>
    </div>
  );
}

export default HeroImage;
