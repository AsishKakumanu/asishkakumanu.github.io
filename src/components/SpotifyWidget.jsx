import React, { useEffect, useState } from 'react'
import { SiSpotify } from 'react-icons/si'

const SpotifyWidget = () => {
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    const fetchRecentTracks = async () => {
      try {
        const response = await fetch(
          'https://asishkakumanu.netlify.app/.netlify/functions/getSpotifyRecentTrack'
        )
        const data = await response.json()
        if (data?.result?.items) {
          setTracks(
            data.result.items.map((item) => ({
              id: item.track.id,
              name: item.track.name,
              artist: item.track.artists.map((a) => a.name).join(', '),
              url: item.track.external_urls.spotify,
              albumArt: item.track.album.images[item.track.album.images.length - 1]?.url,
            }))
          )
        }
      } catch (error) {
        console.error('Error fetching Spotify data:', error)
      }
    }
    fetchRecentTracks()
  }, [])

  const latestTrack = tracks[0]

  return (
    <div className="spotify-widget">
      <div className="spotify-panel">
        <div className="spotify-panel-header">Recently Played</div>
        {latestTrack && (
          <div className="spotify-embed">
            <iframe
              src={`https://open.spotify.com/embed/track/${latestTrack.id}?utm_source=generator&theme=0`}
              width="100%"
              height="80"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Player"
            />
          </div>
        )}
        {tracks.length > 1 && (
          <div className="spotify-track-list">
            {tracks.slice(1).map((track, i) => (
              <a
                key={`${track.id}-${i}`}
                href={track.url}
                target="_blank"
                rel="noopener noreferrer"
                className="spotify-track-item"
              >
                <img src={track.albumArt} alt="" className="spotify-track-art" />
                <div className="spotify-track-info">
                  <div className="spotify-track-name">{track.name}</div>
                  <div className="spotify-track-artist">{track.artist}</div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
      <div className="spotify-pill">
        <SiSpotify />
      </div>
    </div>
  )
}

export default SpotifyWidget
