import React, { useEffect } from 'react'
import { useAtom } from 'jotai'
import { spotifyDataAtom, spotifyLoadingAtom } from '@/store/atoms'
import { SiSpotify } from 'react-icons/si'

const SpotifyWidget = () => {
  const [spotifyData, setSpotifyData] = useAtom(spotifyDataAtom)
  const [loading, setLoading] = useAtom(spotifyLoadingAtom)

  useEffect(() => {
    const fetchSpotifyData = async () => {
      setLoading(true)
      try {
        const baseUrl = 'https://asishkakumanu.netlify.app/.netlify/functions/getSpotifyRecentTrack'
        const response = await fetch(baseUrl)
        const data = await response.json()

        if (data?.result?.items?.[0]) {
          const item = data.result.items[0]
          setSpotifyData({
            songName: item.track.name,
            artist: item.track.artists.map(a => a.name).join(', '),
            songUrl: item.track.external_urls.spotify,
          })
        }
      } catch (error) {
        console.error('Error fetching Spotify data:', error)
        setSpotifyData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchSpotifyData()
  }, [setSpotifyData, setLoading])

  const href = spotifyData?.songUrl || 'https://open.spotify.com'

  return (
    <a
      className="spotify-widget"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="spotify-icon">
        <SiSpotify />
      </span>
      {spotifyData && (
        <span className="spotify-track">
          Last Played "{spotifyData.songName}"
        </span>
      )}
    </a>
  )
}

export default SpotifyWidget
