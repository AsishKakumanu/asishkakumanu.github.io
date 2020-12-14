import React, { useState, useEffect } from "react";
import equalizer from "../images/equalizer-crop.gif";

var myHeaders = new Headers();
myHeaders.append("Origin", "");
myHeaders.append("X-Requested-With", "");

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

const Lastfm = () => {
  const baseUrl = `https://cors-anywhere.herokuapp.com/https://asishkakumanu.netlify.app/.netlify/functions/getRecentTrack
`;
  const [songName, setSongName] = useState("");
  const [songUrl, setSongUrl] = useState("");

  // Client-side Runtime Data Fetching
  useEffect(() => {
    fetch(baseUrl, requestOptions)
      .then((response) => response.json()) // parse JSON from request
      .then((resultData) => {
        setSongName(resultData.result.recenttracks.track[0].name);
        setSongUrl(resultData.result.recenttracks.track[0].url);
      })
      .catch((e) => {
        console.log("Error caught in Lastfm Component", e);
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
