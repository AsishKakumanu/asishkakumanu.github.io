import React from "react"
require("es6-promise").polyfill()
require("isomorphic-fetch")

export default class LastFm extends React.Component {
  state = { songs: [] }

  componentWillUpdate() {
    this.fetchData()
  }

  fetchData() {
    fetch(
      "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=asishkakumanu&api_key=c381bcb2ced52d2f323ff0887021ac4b&format=json"
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ songs: data.recenttracks })
      })
      .catch(console.log)
  }

  render() {
    const song = this.state.songs.track
    // const trackObj = song["track"]

    // const album = JSON.stringify(this.state.songs.track[0].name)
    return (
      <div className="functionLastFm">
        {" "}
        Last Played {JSON.stringify(song[0].name)}{" "}
      </div>
    )
  }
}
