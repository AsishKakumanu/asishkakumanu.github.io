import React, { useState, useEffect } from "react";
import equalizer from "../images/equalizer-crop.gif";

const Lastfm = () => {
  const API_KEY = process.env.GATSBY_API_KEY;
  const username = process.env.GATSBY_username;
  const baseUrl = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${API_KEY}&format=json`;
  const [songName, setSongName] = useState("");
  const [songUrl, setSongUrl] = useState("");

  // Client-side Runtime Data Fetching
  useEffect(() => {
    fetch(baseUrl, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Headers": "ws.audioscrobbler.com",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json()) // parse JSON from request
      .then((resultData) => {
        setSongName(resultData.recenttracks.track[0].name);
        setSongUrl(resultData.recenttracks.track[0].url);
      });
  }, []);

  return (
    <p className="lastfm">
      <span className="eq">
        <img src={equalizer} alt="Equalizer Icon"></img>
      </span>
      <a href={songUrl} target="_blank" rel="noopener noreferrer">
        Last Played `{songName}`
      </a>
    </p>
  );
};

export default Lastfm;
