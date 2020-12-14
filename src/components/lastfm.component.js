import React, { useState, useEffect } from "react";
import equalizer from "../images/equalizer-crop.gif";

const Lastfm = () => {
  const baseUrl = `https://asishkakumanu.netlify.app/.netlify/functions/getRecentTrack
`;
  const [songName, setSongName] = useState("");
  const [songUrl, setSongUrl] = useState("");

  // Client-side Runtime Data Fetching
  useEffect(() => {
    fetch(baseUrl, {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json()) // parse JSON from request
      .then((resultData) => {
        console.log(resultData);
        setSongName(resultData.result.recenttracks.track[0].name);
        setSongUrl(resultData.result.recenttracks.track[0].url);
      })
      .catch((error) => {
        console.log("Error caught in Lastfm Component", error);
      });
  }, []);

  return (
    <p className="lastfm">
      <span className="eq">
        <img src={equalizer} alt="Equalizer Icon"></img>
      </span>
      <a href={songUrl} target="_blank" rel="noopener noreferrer">
        {songName ? `Last Played "${songName}"` : "⚠️"}
      </a>
    </p>
  );
};

export default Lastfm;
