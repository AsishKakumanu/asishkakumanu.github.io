import React, { useEffect } from 'react'
import { useAtom } from 'jotai'
import { lastfmDataAtom, lastfmLoadingAtom } from '@/store/atoms'
import equalizer from '@images/equalizer-crop.gif'

const Lastfm = () => {
  const [lastfmData, setLastfmData] = useAtom(lastfmDataAtom)
  const [loading, setLoading] = useAtom(lastfmLoadingAtom)

  useEffect(() => {
    const fetchLastfmData = async () => {
      setLoading(true)
      try {
        const baseUrl = 'https://asishkakumanu.netlify.app/.netlify/functions/getRecentTrack'
        const response = await fetch(baseUrl)
        const resultData = await response.json()

        if (resultData?.result?.recenttracks?.track?.[0]) {
          const track = resultData.result.recenttracks.track[0]
          setLastfmData({
            songName: track.name,
            songUrl: track.url
          })
        }
      } catch (error) {
        console.error('Error fetching Last.fm data:', error)
        setLastfmData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchLastfmData()
  }, [setLastfmData, setLoading])

  return (
    <p className="lastfm">
      <span className="eq">
        <img src={equalizer} alt="Equalizer Icon" />
      </span>
      {loading ? (
        <span>Loading...</span>
      ) : lastfmData ? (
        <a href={lastfmData.songUrl} target="_blank" rel="noopener noreferrer">
          Last Played "{lastfmData.songName}"
        </a>
      ) : (
        <span>⚠️</span>
      )}
    </p>
  )
}

export default Lastfm
