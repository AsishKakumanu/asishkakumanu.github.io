import React, { useState, useEffect } from "react";

const Lastfm = () => {
  // Client-side Runtime Data Fetching
  const [starsCount, setStarsCount] = useState(0);
  useEffect(() => {
    // get data from GitHub api
    fetch(``, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Headers": "ws.audioscrobbler.com",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json()) // parse JSON from request
      .then((resultData) => {
        setStarsCount(resultData.recenttracks.track[0].name);
      }); // set data for the number of stars
  }, []);

  return <p>{starsCount}</p>;
};

export default Lastfm;
